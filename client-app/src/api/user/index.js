import { httpInctance } from ".."

export const getTokenByAuthParamsRequest = (dto) => {
  const params = {
    login: dto.login,
    password: dto.password
  }

  return httpInctance.post('auth/login', params)
}

export const getUserByTokenRequest = (token) => {
  const params = {
    token: token
  }

  return httpInctance.get('users/get_by_token/', { params });
}