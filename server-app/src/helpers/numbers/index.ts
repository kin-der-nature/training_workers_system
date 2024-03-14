export const getSumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, item) => (acc = acc + item), 0);
};
