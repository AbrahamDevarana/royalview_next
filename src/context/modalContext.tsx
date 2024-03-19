import {createContext, useState} from 'react';


export const ModalContext = createContext({
    brochureOpen: false,
    ctaOpen: false,
    openBrochure: () => {},
    closeBrochure: () => {},
    openCTA: () => {},
    closeCTA: () => {}
  });
  export const ModalProvider = ({ children } : {children : React.ReactNode}) => {
    const [brochureOpen, setBrochureOpen] = useState(false);
    const [ctaOpen, setCtaOpen] = useState(false);
  
    const openBrochure = () => {
        setBrochureOpen(true);
      };
    
      const closeBrochure = () => {
        setBrochureOpen(false);
      };
    
      const openCTA = () => {
        setCtaOpen(true);
      };
    
      const closeCTA = () => {
        setCtaOpen(false);
      };
  
      const contextValue = {
        brochureOpen,
        ctaOpen,
        openBrochure,
        closeBrochure,
        openCTA,
        closeCTA
      };
  
    return (
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
    );
  };
  