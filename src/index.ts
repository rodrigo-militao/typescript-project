import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

app.use(routes);

app.listen(3000);
