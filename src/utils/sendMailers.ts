import sha256 from "sha256";

export const sendMail = async (form: any, token: string) => {
    const response = await fetch(`/api/mailer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, token }),
    });
    return response;
};

export const sendBrochure = async (form: any) => {
    const response = await fetch(`/api/brochure`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ form }),
    });

    return response;
};

export const sendSalesforce = async (form :  any) => {
    const { nombre, email, telefono, mensaje, contacto } = form;

    console.log("form", form);

    const newForm = new FormData();

    newForm.append("oid", "00DD7000000o3eC");
    newForm.append("retURL", "https://devarana.mx");
    newForm.append("company", nombre);
    newForm.append("email", email);
    newForm.append("phone", telefono);
    newForm.append("00ND700000gC66W", mensaje);
    newForm.append("lead_source", "Sitio Web");

    await fetch(
        "https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DD7000000o3eC",
        {
            method: "POST",
            headers: {
                "Content-Type": "text/html; charset=UTF-8",
            },
            body: JSON.stringify({
                oid: "00DD7000000o3eC",
                retURL: "https://devarana.mx",
                company: nombre,
                email: email,
                phone: telefono,
                "00ND700000gC66W": mensaje,
                lead_source: "Sitio Web",
            }),
        },
    )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};


export const sendFacebookApi = async (form: any) => {
    const pixelVersion = process.env.NEXT_PUBLIC_FB_API_VERSION;
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const pixelToken = process.env.NEXT_PUBLIC_FBACCESS_TOKEN;
    const uri = `https://graph.facebook.com/${pixelVersion}/${pixelId}/events?access_token=${pixelToken}`;


    const payload = {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_id: Date.now(),
        event_source_url: window.location.href,
        user_data: {
            em: sha256(form.email),
            ph: sha256(form.telefono),
            fn: sha256(form.nombre),
            client_user_agent: navigator.userAgent
        },
    };
    await fetch(
        uri,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "data": [payload],
                "test_event_code": "TEST9985"
            }),
        }
    );
}