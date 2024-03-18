export const getSumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, item) => (acc = acc + item), 0);
};

export const computePercent = (a: number, b: number): any => {
  return (a / b) * 100;
};
