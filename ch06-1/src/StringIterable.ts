export class StringIterable implements Iterable<string> {
  constructor(
    private strings: string[] = [],
    private currentIndex: number = 0
  ) {}

  [Symbol.iterator](): Iterator<string> {
    const that = this;
    let currentIndex = that.currentIndex;
    const length = that.strings.length;

    const iterator: Iterator<string> = {
      next(): IteratorResult<string> {
        if (currentIndex < length) {
          return { value: that.strings[currentIndex++], done: false };
        } else {
          return { value: '', done: true };
        }
      },
    };

    return iterator;
  }
}
