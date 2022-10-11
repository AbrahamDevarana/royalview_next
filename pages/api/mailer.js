import nodemailer from 'nodemailer'
import moment from 'moment';


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const { origen, nombre, email, telefono, mensaje, contacto } = req.body

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
            to: ['ventas-landing@devarana.mx', ' ventas@devarana.mx', 'abrahamalvarado+royalview@devarana.mx'],
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
        console.log(error);
        return res.status(500).json({ error: error.message || error.toString() });
      }
      return res.status(200).json({ error: "" });
    
    

};
