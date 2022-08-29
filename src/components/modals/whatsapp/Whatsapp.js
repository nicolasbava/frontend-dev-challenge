/******* WHATSAPP BUTTON - appears when you scroll down *************/


import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from '../../../assets/img/modal--wsp--green.png'

const ModalWsp = () => {
    const [isVisible, setIsVisible] = useState(false);
 
    useEffect(() => {
        
      const toggleVisibility = () => {              // Function to set state isVisible = true or false    
        if (window.pageYOffset > 805) {             // Button is displayed after scrolling for 805 pixels
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);

    }, []);

    
    const setOpacity = () => {                  // Function that returns 1 or 0 to show button
        return (isVisible ? '1' : '0')          // Also to make gentle transition with it
    }

    return (  
      <>

          <WspButton style={{opacity: `${setOpacity()}`}}>
                <img src={logo}></img>
          </WspButton>
       
      </>
    );
}

 

export const WspButton = styled.article`    
    position: fixed;
    bottom: 12px;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: 4px #189d0e solid;
    border-radius: 50%;
    z-index: 101;
    box-shadow: -3px 3px 11px rgb(0 0 0 / 50%);
    left: 14px;
    transition: all 500ms ease;
    cursor: pointer;


    &:hover {
        transform: scale(1.05);
    }


`;

export default ModalWsp;