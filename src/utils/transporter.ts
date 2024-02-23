import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST as string,
    service: process.env.MAIL_SERVICE as string,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME as string,
        pass: process.env.MAIL_PASSWORD as string,
    },
    tls: {
        rejectUnauthorized: false,
    },
    greetingTimeout: 1000,
} as nodemailer.TransportOptions);
