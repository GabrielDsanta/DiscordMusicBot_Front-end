import { selector } from 'recoil'
import { atomToken } from './../atoms/index'
import { requester } from '../../api/requester'

export const selectorGetUser = selector({
  key: 'selectorGetUser',
  get: async ({ get }) => {
    const token = get(atomToken)

    if (!token) {
      return
    }

    const { data } = await requester({
      Authorization: token,
    }).get('/me')

    return data
  },
})
