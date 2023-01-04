import nodemailer from 'nodemailer'
import moment from 'moment';


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    console.log('Enviando correo...');

    const {form, token} = req.body;
    const { origen, nombre, email, telefono, mensaje, contacto } = form

    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY + "&response=" + token;
    fetch(verificationUrl)
    .then(response => response.json())
    .then( async data => {
        if(data.success && data.score > 0.5) {
            const transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                service: process.env.MAIL_SERVICE,
                port: process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD
                }
            })
            try {
                await transporter.sendMail({
                    from: "Royalview Contacto <ventas-landing@devarana.mx>",
                    // to: ['ventas-landing@devarana.mx', ' ventas@devarana.mx'],
                    bcc: ['abrahamalvarado+royalview@devarana.mx'],
                    subject: "Contacto Royal View",
                    html: `
                        <p><span style="font-weight:bold;"> Origen: </span> ${origen} </p>
                        <p><span style="font-weight:bold;"> Nombre: </span> ${nombre} </p>
                        <p><span style="font-weight:bold;"> Correo: </span> ${email} </p>
                        <p><span style="font-weight:bold;"> Teléfono: </span> ${telefono} </p>
                        <p><span style="font-weight:bold;"> Fecha: </span> ${moment().format('lll')} </p>
                        <p><span style="font-weight:bold;"> Mensaje: </span> ${mensaje || ''} </p>
                        <p><span style="font-weight:bold;"> Quiero que me contacten por: </span> ${contacto || ''} </p>
                    `
                });
              } catch (error) {
                return res.status(500).json({ error: error.message || error.toString() });
              }
                return res.status(200).json({ message: 'Email sent' });
            
        }else{
            return res.status(200).json({ error: "Error de validación" });
        }
    }).catch(error => {
        return res.status(500).json({ error: error.message || error.toString() });
    });
};
