import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { atomToken, atomUser } from '../../store/atoms'
import { selectorGetUser } from '../../store/selector'
import { useSetRecoilState, useRecoilValueLoadable } from 'recoil'
export function Auth() {
  const navigate = useNavigate()
  const { token } = useParams()

  const setToken = useSetRecoilState(atomToken)
  const setUser = useSetRecoilState(atomUser)

  const getUser = useRecoilValueLoadable(selectorGetUser)

  useEffect(() => {
    if (token) {
      setToken(token.replace('token=', 'Bearer '))
    }
  }, [token, setToken])

  useEffect(() => {
    if (getUser.state === 'hasValue') {
      setUser({
        country: getUser?.contents?.country,
        name: getUser?.contents?.display_name,
        img: getUser?.contents?.images?.[0].url,
      })
      console.log(getUser.contents)
    }
    if (getUser.state === 'hasError') {
      navigate('/')
    }
  }, [getUser.state, getUser.contents, navigate, setUser])

  return <div>Loading...</div>
}
