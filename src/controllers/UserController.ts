import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: "Rodrigo", email: "militao@teste.com"}
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    console.log(req.body)
    const { name, email } = req.body;

    const user = {
      name,
      email
    }

    users.push(user);

    const emailService = new EmailService();

    emailService.sendMail({
      to: {name, email},
      message: {subject: "Email creation", body: "New account created"}
      });

    return res.json(users);
  }
};