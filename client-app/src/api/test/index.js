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

export const createTestRequest = (dto) => {
  const params = {
    name: dto.name,
    questions: dto.questions
  }

  return httpInctance.post('tests/create', params)
}