import { httpInctance } from ".."

export const getTestsRequest = () => {
  return httpInctance.get('tests/');
}

export const getTestByIdRequest = (dto) => {
  const params = {
    id: dto
  }

  return httpInctance.get('tests/one/', { params })
}