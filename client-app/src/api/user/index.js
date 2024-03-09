import { httpInctance } from ".."

export const getTokenByAuthParamsRequest = (dto) => {
  const params = {
    login: dto.login,
    password: dto.password
  }

  return httpInctance.post('auth/login', params)
}