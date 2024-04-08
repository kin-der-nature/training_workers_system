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
  const questionsId = dto.questions.map((item) => item.id)
  const params = {
    name: dto.name,
    questions: questionsId
  }

  return httpInctance.post('tests/', params)
}