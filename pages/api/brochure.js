
import moment from 'moment';
import { resolve } from 'path';
import { transporter } from '../../utils/transporter';

const handleErrors = (res, error) => {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message || error.toString() });
};


export default async function handler (req, res) {
    try {

        const { form } = req.body;
        const { nombre, email } = form;
        await transporter.verify();

        const brochurePath = resolve(process.cwd(), 'public', 'assets/files/BROCHURE-SEPT-2022.pdf');
        await transporter.sendMail({
            from: 'Royal View Contacto <noreply@devarana.mx>',
            to:  email,
            subject: 'Brochure Royal View',
            html: `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <style>
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                </style>
                <body>
                    <table style="width: 100%; max-width: 600px; margin: 0 auto;">
                        <tr style="background-color: #242a38;">
                            <td style="text-align: center;padding: 18px 0px;">
                                <img src="https://devarana-storage.sfo3.cdn.digitaloceanspaces.com/royalview/royal-view-logo-blanco.png" alt="Royal View" style="width: 300px; height: auto;">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="background-color: rgba(101, 106, 118, .2); height: 1px; width: 100%; margin: 15px 0 ;" ></div>
                            </td>
                        </tr>
                        <tr>
                        <td>
                                <img src="https://devarana-storage.sfo3.cdn.digitaloceanspaces.com/royalview/royalview-torres-nueva-camp-medios-ext.jpg" alt="Brochure" style="width: 100%; height: auto;">
                        </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; padding: 20px 20px;">
                                <h1 style="font-size: 24px; color: #d64767; margin: 0; padding: 15px 0;">¡Hola ${nombre} !</h1>
                                <p style="font-size: 16px; color: #333; margin: 0;padding: 15px 0;">Gracias por su interés en <strong>Royal View by <a style="text-decoration: none;color: #333;" href="https://devarana.mx" target="_blank">DEVARANA</a></strong>. Estamos emocionados de ayudarle a elegir un inmueble de alta plusvalía. </p>
                                <p style="font-size: 16px; color: #d64767; margin: 0;font-weight: bold;padding: 15px 0;">En este correo encontrará adjunto el <span style="color:#ff5757;">brochure</span> con más información.</p>
                                <p style="font-size: 16px; color: #333; margin: 0;padding: 15px 0;">Si desea agendar una visita a los departamentos muestra, puede hacerlo fácilmente contactándonos por WhatsApp para hablar con un Asesor.</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center; padding: 10px 0 20px;">
                                <a href="https://api.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View." style="background-color: #ff5757; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Contacta a un Asesor</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="background-color: rgba(101, 106, 118, .2); height: 1px; width: 100%; margin: 15px 0 ;" ></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #242a38;">
                                <div style="text-align: center; padding: 10px 0px 5px;margin: auto;">
                                    <a target="_blank" href="https://www.facebook.com/DevaranaResidences"><img src="https://devarana-storage.sfo3.digitaloceanspaces.com/royalview/fb-icono-bco-160x160.png" alt="Facebook" style="width: 30px; height: auto; margin: 0 10px;"></a>
                                    <a target="_blank" href="https://www.instagram.com/devarana.mx/"><img src="https://devarana-storage.sfo3.cdn.digitaloceanspaces.com/royalview/ig-icono-bco-160x160.png" alt="Instagram" style="width: 30px; height: auto; margin: 0 10px;"></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="background-color: rgba(101, 106, 118, .2); height: 1px; width: 100%; margin: 15px 0 ;" ></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100%; text-align: center;">
                                <a style="color:#242a38; padding-right: 5px;" href="https://royalview.mx/" target="_blank">Sitio Web</a>
                                <a style="color: #242a38; padding-left: 5px;" href="https://royalview.mx/aviso-de-privacidad" target="_blank">Aviso de Privacidad</a>
                                <p style="padding: 10px 0; font-size: 10px;">Derechos Reservados DEVARANA 2022</p>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
            `,
            attachments: [
                {
                    filename: 'BROCHURE-SEPT-2022.pdf',
                    path: brochurePath
                }
            ]
        });

        return res.status(200).json({ message: 'Email sent' });
    } catch (error) {
        return handleErrors(res, error);
    }
};
