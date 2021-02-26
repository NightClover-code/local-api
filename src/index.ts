//importing express
import express from 'express';
//serve
export const serve = (port: number, filename: string, dir: string) => {
  const app = express();
  //listening
  app.listen(port, () => {
    console.log(`listenning on port: ${port}`);
  });
};
