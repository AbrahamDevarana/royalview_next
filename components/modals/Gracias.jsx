import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import RoyalViewSVG from "../svg/RoyalView";


export default function Gracias({ formSubmitted, setFormSubmitted }) {
  
    const closeModal = () => {
        setFormSubmitted(false);
    };

    useEffect(() => {
        if (formSubmitted) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
    }, [formSubmitted])

  return (
    <>
      {formSubmitted ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999] outline-none focus:outline-none backdrop-blur-sm bg-black bg-opacity-20 overflow-hidden lg:p-0 p-4"
            onClick={closeModal}
          >
            <div className="w-full mx-auto max-w-screen-lg relative" onClick={e => e.stopPropagation()}>
                
                <button className="absolute right-4 top-2" onClick={closeModal}>
                    <CloseOutlined className="text-2xl"/>
                </button>
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-36 py-20">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div className="text-center pt-10">
                        <h1 className="lg:text-5xl text-3xl text-royal-pink font-light">¡Encantados de atenderte!</h1>
                        <p className="py-16 text-base text-royal-graph font-light">En breve un Asesor se pondrá en contacto contigo.</p>
                    </div>
                </div>
          
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-black"  ></div>
        </>
      ) : null}
    </>
  );
}