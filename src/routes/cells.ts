import express from 'express';
import fs from 'fs/promises';
import path from 'path';
//cell interface
interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}
//exporting router function
export const createCellsRouter = (filename: string, dir: string) => {
  //using router
  const router = express.Router();
  const fullPath = path.join(dir, filename);
  //routes
  router.get('/cells', async (req, res) => {
    //make sure the cell *storage* file exists
    //add it when doesn't exist
    //read the file
    //parse a list of cells out of it
    //send list to the browser
  });
  router.post('/cells', async (req, res) => {
    //format the cells content from the request
    const { cells }: { cells: Cell[] } = req.body;
    //write cells into a file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
    //sending response
    res.send({ status: 'ok' });
  });
  return router;
};
