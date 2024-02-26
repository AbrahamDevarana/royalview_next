import nodemailer from "nodemailer";
import moment from "moment";
import { NextResponse } from "next/server";

const handleErrors = (res: NextResponse, error: unknown) => {
    console.error("Error:", error);
    NextResponse.json({ message: "Error sending email" }, { status: 500 });
};

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export default async function handler(req: Request, res: Response) {
    try {
        const { form, token } = req.body as any;
        const { origen, nombre, email, telefono, mensaje, contacto } = form;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY}&response=${token}`;
        const response = await fetch(verificationUrl);
        const data = await response.json();

        if (!data.success || data.score <= 0.5) {
            NextResponse.json({ message: "Error de validación" }, { status: 500 });
        }

        await transporter.verify();

        await transporter.sendMail({
            from: "Royal View Contacto <noreply@devarana.mx>",
            to: ["ventas-landing@devarana.mx", "ventas@devarana.mx"],
            bcc: ["abrahamalvarado+royalview@devarana.mx"],
            subject: "Contacto",
            html: `
                <p><span style="font-weight:bold;">Origen:</span> ${origen}</p>
                <p><span style="font-weight:bold;">Nombre:</span> ${nombre}</p>
                <p><span style="font-weight:bold;">Correo:</span> ${email}</p>
                <p><span style="font-weight:bold;">Teléfono:</span> ${telefono}</p>
                <p><span style="font-weight:bold;">Fecha:</span> ${moment().format("lll")}</p>
                <p><span style="font-weight:bold;">Mensaje:</span> ${mensaje || ""}</p>
                ${contacto ? `<p><span style="font-weight:bold;">Contacto:</span> ${contacto}</p>` : ""}
            `,
        });

        return NextResponse.json({ message: "Correo enviado" });
    } catch (error) {
        return handleErrors(new NextResponse, error);
    }
}
