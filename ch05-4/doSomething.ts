import { ResultType } from './resultType';

export const doSomething = (): ResultType => {
  try {
    throw new Error('Some error occurs...');
  } catch (error) {
    return [false, (error as Error).message];
  }
};
