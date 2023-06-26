export const filterDuplicateElements = (array: string[]): string[] => {
  const tempSet = new Set(array);

  return [...tempSet];
};
