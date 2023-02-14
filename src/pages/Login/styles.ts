import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['gray-800']};

  img {
    width: 45rem;
    height: 50rem;
    margin: 1rem 0 0 0;

    object-fit: cover;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`
export const FormLogin = styled.form`
  width: 45rem;
  height: 50rem;

  margin: 1rem 0 0 0;
  padding-left: 12.0625rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  background: ${(props) => props.theme.white};

  p {
    font-size: 1rem;
    font-weight: 400;
  }
  h1 {
    font-weight: 700;
    font-size: 1.875rem;

    margin-bottom: 1.5rem;
  }
`
export const InputsLogin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.75rem;
  }
  input {
    width: 21.875rem;
    height: 3.125rem;

    font-size: 1rem;

    margin-bottom: 0.75rem;
    padding: 1.25rem 0 0.875rem 1.25rem;

    border: 1px solid ${(props) => props.theme['gray-100']};
  }
  footer {
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;
    span {
      font-weight: 400;
      font-size: 0.875rem;
    }
    a {
      font-weight: 400;
      font-size: 0.875rem;

      color: #2c5282;
      text-decoration: none;
    }
  }
`
export const BaseButton = styled.button`
  width: 21.6875rem;
  height: 3.125rem;
  margin: 1.6875rem 0 0 0;

  border: 0;
  border-radius: 4px;

  outline: none;
  cursor: pointer;

  color: ${(props) => props.theme.white};
`
export const ButtonLogin = styled(BaseButton)`
  background: ${(props) => props.theme['green-300']};
`
export const ButtonLoginSpotify = styled(BaseButton)`
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-800']};
`
