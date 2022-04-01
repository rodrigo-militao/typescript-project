import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.get('/users', UserController.index);
routes.post('/create-user', UserController.create);

export default routes;