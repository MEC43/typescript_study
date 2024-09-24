export const pureSort = <T>(arr: readonly T[]): T[] => {
  let deepCopied = [...arr];
  return deepCopied.sort();
};
