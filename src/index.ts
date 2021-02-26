//importing express
import express from 'express';
//serve
export const serve = (port: number, filename: string, dir: string) => {
  const app = express();
  //wrapping express into a promise
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
};
