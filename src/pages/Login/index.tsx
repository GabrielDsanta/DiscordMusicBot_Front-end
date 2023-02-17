import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SpotifyLogo } from 'phosphor-react'
import {
  ContainerLogin,
  FormLogin,
  InputsLogin,
  Error,
  ButtonLogin,
  ButtonLoginSpotify,
} from './styles'
import photo from '../.././assets/image 1.png'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { atomUser } from '../../store/atoms'
import { useNavigate } from 'react-router-dom'

const newLoginFormValidationSchema = zod.object({
  emailUser: zod
    .string()
    .email('This is not a valid email.')
    .min(1, { message: 'Password invalid' })
    .refine((e) => e === 'abcd@fg.com', 'This email is not in our database'),

  passwordUser: zod
    .string()
    .min(1, { message: 'Password invalid' })
    .refine((e) => e === 'abcd@fg.com', 'This password is not in our database'),
})

type newLoginFormData = zod.infer<typeof newLoginFormValidationSchema>

export function Login() {
  const navigate = useNavigate()
  const user = useRecoilValue(atomUser)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<newLoginFormData>({
    resolver: zodResolver(newLoginFormValidationSchema),
    defaultValues: {
      emailUser: '',
      passwordUser: '',
    },
  })

  function handleLogin(data: newLoginFormData) {
    console.log(data)
    reset()
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
    } else {
      navigate('/home')
    }
  }, [user, navigate])

  return (
    <ContainerLogin>
      <img src={photo} alt="" />
      <FormLogin onSubmit={handleSubmit(handleLogin)}>
        <p>Welcome back</p>
        <h1>Login to your account</h1>
        <InputsLogin>
          <label htmlFor="emailUser">Email</label>
          <input
            type="email"
            id="emailUser"
            {...register('emailUser')}
            placeholder="John.snow@gmail.com"
          />
          {errors.emailUser && <Error>{errors.emailUser.message}</Error>}
          <label htmlFor="passwordUser">Password</label>
          <input
            type="password"
            id="passwordUser"
            {...register('passwordUser')}
            placeholder="JohnSnowPassword"
          />
          {errors.passwordUser && <Error>{errors.passwordUser.message}</Error>}
          <footer>
            <span>Remember me</span>
            <a href="#">Forgot password?</a>
          </footer>
        </InputsLogin>
        <ButtonLogin>Login now</ButtonLogin>
        <a href="http://localhost:8080/login">
          <ButtonLoginSpotify type="button">
            <SpotifyLogo size={32} color="#00B37E" weight="fill" /> Or sign-in
            with Spotify
          </ButtonLoginSpotify>
        </a>
      </FormLogin>
    </ContainerLogin>
  )
}
