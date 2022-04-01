interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(message: MessageDTO): void;
}

class EmailService implements IEmailService {

  sendMail({ to, message }: MessageDTO) {
    console.log(`Sending email to ${to.name} (${to.email})`);
    console.log(message);
  }

}

export default EmailService;