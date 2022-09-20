import nodemailer from 'nodemailer'
import moment from 'moment';


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const { origen, nombre, email, telefono, mensaje } = req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d66916f6c2be80",
            pass: "8a8c723c87a931"
        }
    })
    try {
        await transporter.sendMail({
            from: "no-reply@royalview.mx",
            to: email,
            subject: "Contacto Royal View",
            html: `
                <p><span style="font-weight:bold;"> Origen: </span> ${origen} </p>
                <p><span style="font-weight:bold;"> Nombre: </span> ${nombre} </p>
                <p><span style="font-weight:bold;"> Correo: </span> ${email} </p>
                <p><span style="font-weight:bold;"> Teléfono: </span> ${telefono} </p>
                <p><span style="font-weight:bold;"> Fecha: </span> ${moment().format('lll')} </p>
                <p><span style="font-weight:bold;"> Mensaje: </span> ${mensaje || ''} </p>
            `
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message || error.toString() });
      }
      return res.status(200).json({ error: "" });
    
    

};
