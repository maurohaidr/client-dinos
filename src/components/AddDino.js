import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
import Draw from './Draw'
import { connect } from "react-redux";

const AddDino = (props) => {
    const[state, setState] = useState({
        nombre: '',
        altura: '',
        largo: '',
        dieta: '',
        imagen: '',
        peligro: '',
        patas: '',
        peso: '' ,
        draw: false,
    })   
    useEffect(() => {
      setState({
          ...state,
          imagen:props.img
      })
      }, [props.img])

    const handleChange = () => {
        setState({
            ...state,
            nombre: document.querySelector('input[name=nombre]').value,
            peso: document.querySelector('input[name=peso]').value,
            altura: document.querySelector('input[name=altura]').value,
            largo: document.querySelector('input[name=largo]').value,
            dieta: document.querySelector('input[name=dieta]').value,
            peligro: document.querySelector('input[name=peligro]').value,
        })
    }
    
    const handleSubmit = async e => {        
        e.preventDefault()   
        axios.post("http://localhost:3001/postDino", state)
        alert('Dino added')           
      }

    const handleDibujar = function() {

       if(state.draw === false) setState({
           ...state,
           draw:true
       })
       else setState({
           ...state,
           draw:false
       })
    }
    
    return (
      <div className='formBox'>
        <Link to='/home'>
            <button className='btnCreOut'>Back</button>
        </Link>
        <div className='form'>
        <span>(*) required fields</span><br/>&nbsp;
        <form  onSubmit={(e) =>handleSubmit(e)}>
          <div className='formItem'>
            <span>Nombre</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.nombre} name='nombre' placeholder='nombre' required />
            &nbsp;<span className='aligned'>*</span> 
          </div>  
          <div className='formItem'>
            <span>Peso</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.peso} name='peso' placeholder='peso' required />
            &nbsp;<span className='aligned'>*</span> 
          </div> 
          <div className='formItem'>
            <span>Altura</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.altura} name='altura' placeholder='altura' required />
            &nbsp;<span className='aligned'>*</span> 
          </div> 
          <div className='formItem'>
            <span>Longitud</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.largo} name='largo' placeholder='longitud' required />
            &nbsp;<span className='aligned'>*</span> 
          </div> 
          <div className='formItem'>
            <span>Dieta</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.dieta} name='dieta' placeholder='dieta' required />
            &nbsp;<span className='aligned'>*</span> 
          </div>   
          <div className='formItem'>
            <span>Peligro</span>&nbsp;
            <input className={state.exists? 'errorImput' : undefined} type="text" onChange={handleChange} value={state.peligro} name='peligro' placeholder='1-10' required />
            &nbsp;<span className='aligned'>*</span> 
          </div>     
          <div>
          <input className='btnCre' type='submit' value='Add'/>
          </div>
        </form>
        <div>
          <button onClick={handleDibujar}>Dibujar</button>
          </div>
        </div>
        {state.draw ? <Draw/> : null}
      </div>
    )
  };

  function mapStateToProps(state) {
    return {
        img:state.img
    };
  }
  
  
  export default connect(
    mapStateToProps,
    null
  )(AddDino);

  
  
