const Map = ({height}) => {
    return ( 
        <>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.957236657975!2d-100.33901958461826!3d20.67131870525928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35c1a62b719b3%3A0x98907a072ae3b165!2sRoyal%20View!5e0!3m2!1ses!2smx!4v1663009705814!5m2!1ses!2smx" 
                style={{border: 0}}
                height={height}
                className="w-full"
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </>
     );
}
 
export default Map;