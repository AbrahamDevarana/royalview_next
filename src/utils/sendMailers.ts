export const sendMail = async (form: any, token: string) => {
    await fetch(`api/mailer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, token }),
    });
};

export const sendBrochure = async (form: any) => {
    await fetch(`api/brochure`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ form }),
    });
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
