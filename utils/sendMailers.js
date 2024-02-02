export const sendMail = async (form, token) => {
    await fetch(`api/mailer`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form, token }),
    });
};

export const sendBrochure = async (form) => {
    await fetch(`api/brochure`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form }),
    });
};