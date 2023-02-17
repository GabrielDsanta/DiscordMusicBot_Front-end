import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { atomToken, atomUser } from '../../store/atoms'

export function Logout() {
  const navigate = useNavigate()

  const user = useRecoilValue(atomUser)
  const token = useRecoilValue(atomToken)

  const resetUser = useResetRecoilState(atomUser)
  const resetToken = useResetRecoilState(atomToken)

  useEffect(() => {
    if (!user && !token) {
      navigate('/')
    }
  }, [user, token, navigate])

  useEffect(() => {
    resetUser()
    resetToken()
  }, [resetToken, resetUser])

  return (
    <div>
      <p>Desconectando do seu usuário...</p>
    </div>
  )
}
