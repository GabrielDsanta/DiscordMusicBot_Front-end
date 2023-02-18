const querystring = require('querystring')
const request = require('request') // "Request" library
const stateKey = 'spotify_auth_state'
const redirect_uri = process.env.REDIRECT_URI
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

module.exports = (app) => {
  const generateRandomString = function (length) {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  app.get('/login', function (req, res) {
    const state = generateRandomString(16)
    res.cookie(stateKey, state)

    const scope =
      'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
    res.redirect(
      'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id,
          scope,
          redirect_uri,
          state,
        }),
    )
  })

  app.get('/callback', function (req, res) {
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null

    if (state === null || state !== storedState) {
      res.redirect(
        '/#' +
          querystring.stringify({
            error: 'state_mismatch',
          }),
      )
    } else {
      res.clearCookie(stateKey)
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code,
          redirect_uri,
          grant_type: 'authorization_code',
        },
        headers: {
          Authorization:
            'Basic ' +
            new Buffer(client_id + ':' + client_secret).toString('base64'),
        },
        json: true,
      }

      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          const access_token = body.access_token
          const refresh_token = body.refresh_token

          const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { Authorization: 'Bearer ' + access_token },
            json: true,
          }

          request.get(options, async function (error, response, body) {
            console.log(error, response, body)
            res.redirect(
              `${process.env.REDIRECT_FRONT_END}` +
                querystring.stringify({
                  token: access_token,
                  refresh_token,
                }),
            )
          })
        } else {
          res.redirect(
            '/#' +
              querystring.stringify({
                error: 'invalid_token',
              }),
          )
        }
      })
    }
  })

  app.get('/api/refresh_token', function (req, res) {
    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
      form: {
        grant_type: 'refresh_token',
        refresh_token,
      },
      json: true,
    }

    request.post(authOptions, function (error, response, body) {
      console.log(error, response, body)
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token

        res.send({
          access_token,
        })
      }
    })
  })
}
