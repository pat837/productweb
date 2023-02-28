import React from 'react'
import { motion } from 'framer-motion';

const Newline2 = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    const stylings = {fontSize:"50px",marginLeft:"135px",color:"#000000",lineHeight:"100%"}
    return <motion.div 
    whileHover={{
        scale: 1.1, 
        color:"#9D00FF",
        textShadow:" 0 0 10px #9D00FF"
    }}
    initial={{x:-80,opacity:0}}
    animate = {{x:0,opacity:1}} 
    transition = {{type:"spring",
        ease: "linear",
        duration:1.9
        
    }}

    style={stylings}>{newText}</motion.div>
}

export default Newline2;