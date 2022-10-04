import { Modal } from "antd";
import RoyalViewSVG from "../svg/RoyalView";

export default function Gracias({formSubmitted, setFormSubmitted, handleCancel}) {
    return(
        <Modal 
            title="" 
            open={formSubmitted} 
            onCancel={handleCancel}
            footer={false}
            centered
            width={1000}
            style={{padding: 20}}
        >
  
                
                <div className="bg-modal bg-auto bg-center flex h-full flex-col py-36">
                    <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
                    <div className="text-center py-10">
                        <h1 className="text-5xl text-royal-pink">¡Encantados de atenderte!</h1>
                        <p className="py-16 text-base text-royal-graph">En breve un Asesor se pondrá en contacto contigo.</p>
                    </div>
                </div>
         
        </Modal>
        
    )
};
