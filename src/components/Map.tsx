const Map = ({ height }: { height: number }) => {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14931.83523024129!2d-100.3370407!3d20.6712548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d3fb03fc6d3961d!2sDEVARANA!5e0!3m2!1ses!2smx!4v1664578413409!5m2!1ses!2smx"
                style={{ border: 0 }}
                height={height}
                className="w-full"
                allowFullScreen
                loading="lazy"
                title="Mapa de ubicación de Devarana"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </>
    );
};

export default Map;
