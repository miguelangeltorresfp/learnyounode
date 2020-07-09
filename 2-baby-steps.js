// const result = process.argv
//   .filter((value, index) => index >= 2)
//   .reduce((prev, current) => Number(prev) + Number(current));
const result = process.argv
  .slice(2)
  .reduce((prev, current) => prev + Number(current), 0);

console.log(result);
