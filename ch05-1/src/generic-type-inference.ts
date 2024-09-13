const identify = <T>(n: T): T => n;
console.log(
  identify<boolean>(true), //
  identify(true)
);
