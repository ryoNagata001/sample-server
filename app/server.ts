import express from 'express';

import {WelcomeController} from './controllers';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
