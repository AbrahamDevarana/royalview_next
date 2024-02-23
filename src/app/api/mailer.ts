import nodemailer from "nodemailer";
import moment from "moment";

const handleErrors = (res, error) => {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message || error.toString() });
};

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: process.env.MAIL_PORT,
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
        const { form, token } = req.body;
        const { origen, nombre, email, telefono, mensaje, contacto } = form;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY}&response=${token}`;
        const response = await fetch(verificationUrl);
        const data = await response.json();

        if (!data.success || data.score <= 0.5) {
            return res.status(500).json({ error: "Error de validación" });
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

        return res.status(200).json({ message: "Email sent" });
    } catch (error) {
        return handleErrors(res, error);
    }
}
