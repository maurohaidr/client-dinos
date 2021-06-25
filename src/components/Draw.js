import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Draw.css'
import { connect } from "react-redux";
import{ sendImg } from '../actions/actions'

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
    const handleErase = function(){
        setColor('white')
        setWidth(25)
    }
    return (
        <div className='DrawBox'>
        <ReactSketchCanvas
        ref={canvas}
        strokeWidth={width}
        strokeColor={color}
        />
        <div className='buttonBox'>
        <button onClick={handleRed}>red</button>
        <button onClick={handleBlack}>black</button>
        <button onClick={handleGreen}>green</button>
        <button onClick={handleBlue}>blue</button>
        <button onClick={handleErase}>erase</button>
        <button
          onClick={() => {
            canvas.current.exportImage("png")
              .then(data => {
                console.log('draw' + data);
                props.sendImg(data)
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Use Image
        </button>
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