import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SpotifyLogo } from 'phosphor-react'
import {
  ContainerLogin,
  FormLogin,
  InputsLogin,
  ButtonLogin,
  ButtonLoginSpotify,
} from './styles'
import photo from '../.././assets/image 1.png'

const newLoginFormValidationSchema = zod.object({
  emailUser: zod.string().email().min(1, 'Email Invalido'),
  passwordUser: zod.string().min(1, 'Senha Invalida'),
})

type newLoginFormData = zod.infer<typeof newLoginFormValidationSchema>

export function Login() {
  const { register, handleSubmit, reset } = useForm<newLoginFormData>({
    resolver: zodResolver(newLoginFormValidationSchema),
    defaultValues: {
      emailUser: '',
      passwordUser: '',
    },
  })

  return (
    <ContainerLogin>
      <img src={photo} alt="" />
      <FormLogin>
        <p>Welcome back</p>
        <h1>Login to your account</h1>
        <InputsLogin>
          <label htmlFor="emailUser">Email</label>
          <input
            required
            type="email"
            id="emailUser"
            placeholder="John.snow@gmail.com"
          />
          <label htmlFor="passwordUser">Password</label>
          <input
            required
            type="password"
            id="passwordUser"
            placeholder="JohnSnowPassword"
          />

          <footer>
            <span>Remember me</span>
            <a href="#">Forgot password?</a>
          </footer>
        </InputsLogin>
        <ButtonLogin type="submit">Login now</ButtonLogin>
        <ButtonLoginSpotify type="submit">
          <SpotifyLogo size={32} color="#00B37E" weight="fill" /> Or sign-in
          with Spotify
        </ButtonLoginSpotify>
      </FormLogin>
    </ContainerLogin>
  )
}
