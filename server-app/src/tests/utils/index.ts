import { getSumNumbers } from 'src/helpers/numbers';

export const calculateScoreOfResponse = (variants: number[]): any => {
  const allScore = variants.map((item: any) => item.counte);
  if (allScore.includes(0)) {
    return 0;
  }

  return getSumNumbers(allScore);
};
