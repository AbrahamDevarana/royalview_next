import nodemailer from "nodemailer";
import moment from "moment";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

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

export async function POST (req: NextRequest) {    
    
    try {

        const postData = await req.json();

        const { form, token } = postData

        const { origen, nombre, email, telefono, mensaje, contacto } = form;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY}&response=${token}`;
        const response = await fetch(verificationUrl);
        const data = await response.json();

        if (!data.success || data.score <= 0.5) {
            return NextResponse.json({ message: "Error de validación" }, { status: 500 });
        }

        await transporter.verify();

        await transporter.sendMail({
            from: "Royal View Contacto <noreply@devarana.mx>",
            to: !process.env.NEXT_PUBLIC_DEV ? ["ventas-landing@devarana.mx", "ventas@devarana.mx"] : [""],
            bcc: ["abrahamalvarado+royalview@devarana.mx"],
            subject: "Contacto",
            html: `
                <p><span style="font-weight:bold;">Origen:</span> ${origen}</p>
                <p><span style="font-weight:bold;">Nombre:</span> ${nombre}</p>
                <p><span style="font-weight:bold;">Correo:</span> ${email}</p>
                <p><span style="font-weight:bold;">Teléfono:</span> ${telefono}</p>
                <p><span style="font-weight:bold;">Fecha:</span> ${moment().format("lll")}</p>
                ${mensaje && mensaje !== '' ? `<p><span style="font-weight:bold;">Mensaje:</span> ${mensaje}</p>` : ""}
                ${contacto ? `<p><span style="font-weight:bold;">Contacto:</span> ${contacto}</p>` : ""}
            `,
        });

        return NextResponse.json({ ok: true, message: "Correo enviado" });
        
    } catch (error) {
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}
