import React from 'react';
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import MyModal from './contactoModal';

function Footer() {
    
    return (
        
        <div className="d-flex flex-wrap justify-content-between align-items-center px-5 py-2 text-white" style={{backgroundColor: '#721919'}}>

            <div>
                <img 
                src='../images/HconDulce100x100.png' 
                width="50" 
                height="50"
                alt="Logo Humaya" 
                />
                <span>Humaya</span>   
            </div>           
                
            <MyModal />
                
            <div>
                <FaFacebookSquare size={40} style={{ marginRight: '1em' }} />
                <FaYoutube size={40} style={{ marginRight: '1em' }} />
                <FaInstagramSquare size={40}/>  
            </div>

        </div>

    );
}

export default Footer;

