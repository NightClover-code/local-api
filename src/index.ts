export const serve = (port: number, filename: string, dir: string) => {
  console.log(
    `serving trafic on port: ${port}\n`,
    `saving/fetching cells from: ${filename}\n`,
    `that file is in directory: ${dir}`
  );
};
