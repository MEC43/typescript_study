export const pureDel = <T>(
  arr: readonly T[],
  cb: (val: T, idx?: number) => boolean
): T[] => arr.filter((val, idx) => cb(val, idx) === false);
