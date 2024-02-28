
const GoogleMap = ({ height }: { height: number }) => {
    const defaultProps = {
        center: {
            lat: 20.671255,
            lng: -100.337041
        },
        zoom: 18
    };

    return (
        <>
            {/* <div style={{
                height
            }}>
                <GoogleMapReact
                    googleMapLoader={undefined}
                    onGoogleApiLoaded={({ map, maps }) => handleInit({ map, maps })}
                    bootstrapURLKeys={{ key: apiKey }}
                    yesIWantToUseGoogleMapApiInternals={true}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}

                >
                </GoogleMapReact>
            </div> */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1866.479401321991!2d-100.337041!3d20.671255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3573a3c4b03cb%3A0x9d3fb03fc6d3961d!2sDEVARANA!5e0!3m2!1sen!2sus!4v1709146219984!5m2!1sen!2sus"
                width="100%"
                height={height}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                

            >
                </iframe>
        </>

    );
};

export default GoogleMap;
