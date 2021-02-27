import express from 'express';
//exporting router function
export const createCellsRouter = (filename: string, dir: string) => {
  //using router
  const router = express.Router();
  //routes
  router.get('/cells', async (req, res) => {
    //make sure the cell *storage* file exists
    //add it when doesn't exist
    //read the file
    //parse a list of cells out of it
    //send list to the browser
  });
  router.post('/cells', async (req, res) => {
    //make sure the cell *storage* file exists
    //add it when doesn't exist
    //format the cells content from the request
    //write cells into a file
  });
  return router;
};
