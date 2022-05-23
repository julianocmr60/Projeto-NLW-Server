import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "36b42b0acd70d3",
        pass: "075f7330ef4d74"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}:SendMailData){
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Juliano Rossi <julianorossi60@gmail.com>",
        subject,
        html: body,
    })
    }
}