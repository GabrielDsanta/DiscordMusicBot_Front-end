import { atom } from 'recoil'
import { User } from '../../models/user'

export const atomToken = atom<string>({
  key: 'atomToken',
  default: '',
})

export const atomUser = atom<User>({
  key: 'atomUser',
  default: undefined,
})
