import sha256 from "sha256";
import axios from "axios";

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
    
    const response = await fetch(`/api/salesforce`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ form }),
    });

    return response;
}



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


    // fbq.event("Lead", { em: sha256(form.email), ph: sha256(form.telefono), fn: sha256(form.nombre) }, { eventID: Date.now() });

    const result = await fetch(
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