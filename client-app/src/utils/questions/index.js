export const getSummaryAllScore = (variants) => {
  return variants.reduce((acc, { counte }) => acc = acc + counte, 0);
}