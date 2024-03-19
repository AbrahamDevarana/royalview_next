import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {

    const postData = await req.json();
    const { form } = postData
    const { nombre, email, telefono, mensaje, contacto } = form;

    const body = {
        oid: "00DD7000000o3eC",
        retURL: "https://royalview.mx/",
        company: nombre,
        "00NW40000002lfZ": 'apellidos',
        "00NW40000001eRd": telefono,
        email: email,
        "00NW40000006eVp": mensaje,
        "00NW40000006ekL": contacto,
        lead_source: "Sitio web Royal View (royalview.mx)"
    }


    try{
        await fetch('https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DD7000000o3eC', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(body).toString(),
    });

        return NextResponse.json({ ok: true, message: "Correo enviado" });
    } catch (error) {
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}