// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    fetch('/assets/files/BROCHURE-SEPT-2022.pdf')
        .then( response => {
            response.blob().then(blob => {
                const fileUrl = window.URL.createObjectURL(blob)

                let aLink = document.createElement('a');
                aLink.href = fileUrl;
                aLink.download = "Brochure-Royal-View.pdf"
                aLink.click();
        })
    })
}