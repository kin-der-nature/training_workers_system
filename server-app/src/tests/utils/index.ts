import { getSumNumbers } from 'src/helpers/numbers';

export const calculateScoreOfResponse = (variants: number[]): any => {
  const allScore = variants.map((item: any) => item.counte);
  if (allScore.includes(0)) {
    return 0;
  }

  return getSumNumbers(allScore);
};

export const calculateScoreTest = (test) => {
  const getQuestionScores = test.map((item) => ({
    id: item.id,
    score: calculateScoreOfResponse(item.responses),
  }));

  const allQuestionScore = getQuestionScores.map((item) => item.score);

  return getSumNumbers(allQuestionScore);
};
