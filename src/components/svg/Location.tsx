import React, { SVGProps } from 'react';

const LocationSVG: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            id="Capa_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 45"
            {...props}
        >
            <g id="Textos">
                <path
                    className="cls-1"
                    d="M22.5 13.77c-3.48 0-6.32 2.83-6.32 6.32 0 2.28.7 3.19 4.56 8.29 0 0 1.18 1.55 1.76 2.33.64-.85 1.22-1.62 1.75-2.31 3.87-5.11 4.57-6.03 4.57-8.3 0-3.48-2.83-6.32-6.32-6.32zm0 9.32c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                />
                <path
                    className="cls-1"
                    d="M22.5 0C10.07 0 0 10.07 0 22.5S10.07 45 22.5 45 45 34.93 45 22.5 34.93 0 22.5 0zm3 29.35l-.13.17c-.66.87-1.4 1.85-2.24 2.97-.15.2-.38.32-.63.32s-.48-.12-.63-.32c-.9-1.2-1.69-2.24-2.39-3.16-4.04-5.32-4.88-6.43-4.88-9.24 0-4.35 3.54-7.9 7.9-7.9s7.9 3.54 7.9 7.9c0 2.8-.84 3.91-4.89 9.25z"
                />
            </g>
        </svg>
    );
}

export default LocationSVG;
