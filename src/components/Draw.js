import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Draw.css'
import { connect } from "react-redux";
import{ sendImg } from '../actions/actions'
import { Link } from "react-router-dom";

const Draw = (props) => {
    var canvas = React.createRef();

    const [color, setColor] = useState('black')
    const [width, setWidth] = useState(2)
    
    const handleRed = function(){
      setWidth(2)
      setColor('red')
    }
    const handleGreen = function(){
      setWidth(2)
      setColor('green')
    }
    const handleBlue = function(){
      setWidth(2)
      setColor('blue')
    }
    const handleBlack = function(){
      setWidth(2)
      setColor('black')
    }
    const handleRosa = function(){
    setWidth(2)
    setColor('pink')
    }
    const handleVioleta = function(){
    setWidth(2)
    setColor('purple')
    }
    const handleAmarillo = function(){
    setWidth(2)
    setColor('yellow')
    }
    const handleErase = function(){
        setColor('white')
        setWidth(25)
    }
    const handleUpload = () => {
      canvas.current.exportImage("png")
        .then(data => {
          props.sendImg(data)
        })
        .catch(e => {
          console.log(e);
        });
    }
    const handleBigger = function() {
      setWidth(width + 2)
    }
    const handleSmaller = function() {
      if(width > 2) setWidth(width - 2)
    }
    return (
        <div className='drawContainer'>
        <div className='DrawBox'>
        <h2>Dibuja el dino que deseas crear</h2>
        <Link to='/AddDino'>
        <button onClick={handleUpload}>Listo!</button>
        </Link>
        <ReactSketchCanvas
        ref={canvas}
        strokeWidth={width}
        strokeColor={color}
        />
        <div className='buttonBox'>
        <button  onClick={handleBigger}>+</button>
        <button  onClick={handleSmaller}>-</button>
        <button className='rojo' onClick={handleRed}></button>
        <button className='negro' onClick={handleBlack}></button>
        <button className='verde' onClick={handleGreen}></button>
        <button className='azul' onClick={handleBlue}></button>
        <button className='rosa' onClick={handleRosa}></button>
        <button className='violeta' onClick={handleVioleta}></button>
        <button className='amarillo' onClick={handleAmarillo}></button>
        <button className='borrar' onClick={handleErase}>Borrar</button>        
        </div>
        </div>
        </div>
    );
};

  function mapDispatchToProps(dispatch) {
    return {
      sendImg: img => dispatch(sendImg(img)), 
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(Draw);