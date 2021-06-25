import { Link } from 'react-router-dom';
import './home.css'
import{ getDinos } from '../actions/actions'
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

const Home = (props) => {
  const [dino, setDino] = useState('');
  const [filter, setFilter] = useState('Breed')
  const [order, setOrder] = useState('a-z')
  const [page, setPage] = useState(0)
  const [ascenDescen, setAscenDescen] = useState('up')
  const [searching, setSearching] = useState(false)
  useEffect(() => {
    props.getDinos(undefined)
    }, [])

  let handleChange = function (e) {
      setDino(e.target.value);      
  }

  let handleSubmit = function(e) {
      e.preventDefault(); 
      console.log('home ' + dino)
      props.getDinos(undefined)
      setSearching(true)
      setPage(0)
      props.getDinos(dino.toLowerCase())
/*       if(filter === 'Breed') props.getDinos(dino.toLowerCase())
      if(filter === 'Temperament') props.getTemps(dino.toLowerCase()) */
  }
/*   let toggleFilter = function(e){
    e.preventDefault();
    if(filter === 'Breed'){
      setFilter('Temperament')
    }
    else {  
      setFilter('Breed')    
    }
  }
  let toggleascenDescen = function(e){
    e.preventDefault();
    if(ascenDescen === 'down'){
      setAscenDescen('up')
      props.dinos && props.dinos.reverse()
    }
    else {
      setAscenDescen('down')
      props.dinos && props.dinos.reverse()
    }
  }
  let toggleOrder = function(e){
    e.preventDefault(); 
    if(order === 'a-z'){
        setOrder('Weight')
        props.dinos && props.dinos.sort((a, b) => ( parseInt(a.peso.slice(0 , 3)) > parseInt(b.peso.slice(0 , 3))) ? 1 : -1)
    }
    if(order === 'Weight') {
        setOrder('a-z')
        props.dinos && props.dinos.sort((a, b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : -1)
    }
  } */
  let nextPage = function(e){
    e.preventDefault(); 
    if(props.dinos.length >= page*8+8)
      setPage(page+1)      
  }
  let prevPage = function(e){
    e.preventDefault();
    if(page>0) setPage(page-1)
  }
return(
  <div className='homeCointainter'>
  <div className='bar'>  
  <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        className='input'
        type="text"
        autoComplete="off"
        value={dino}
        onChange={(e) => handleChange(e)}
      />
      <button className='btn' type="submit">Search</button>
      <Link className='btnCreate' to='/Draw'>
        <button className='btn'>Add Dino</button>
    </Link>
    </form>
{/*     <span className='barItem'>Search:</span>
    <button className='btn' onClick={(e) => toggleFilter(e)}>{filter}</button>      
             
    {props.dinos && props.dinos.length > 0 ? 
      <div>
      <span className='barItem' >Order:</span>
      <button className='btn' onClick={(e) => toggleOrder(e)}>{order}</button>
      <button className='btn' onClick={(e) => toggleascenDescen(e)}> {ascenDescen} </button>
      </div>
      : null
    }
    <Link className='btnCreate' to='/creacion'>
      <button className='btn'>Add new breed</button>
    </Link> */}
  </div>
  <div className='pageBox'>
    {props.dinos && props.dinos.length > 0 ? 
    <div className='btnPageBox'>
      <button className='btnPage' onClick={(e) => prevPage(e)}>prev</button>
      <span className='numberPage'>{page + 1}/{Math.ceil(props.dinos.length/8)}</span>
      <button className='btnPage' onClick={(e) => nextPage(e)}>next</button>   
    </div>
    : null
    }

    
    <div className='cardsBox'>
      {props.dinos && props.dinos.length > 0 ? props.dinos.slice(page*8, page*8+8).map((e) => {
        return(       
            <div className='dinoCard' key={e.id}>
              <img className='imgCard' src={e.imagen} width="240" height="160" alt="" />
              <div className='textCard'>
                <span className='homeName'>{e.nombre}</span>
                <span>Dieta:</span><span>{e.dieta}</span>
                <span>Longitud:</span><span>{e.largo}</span>
                <span>Altura:</span><span>{e.altura}</span>
                <span>Peso:</span><span>{e.peso}</span>
              </div>
            </div>
            )
      })
      : props.dinos && props.dinos.length < 1? <div className='dinoCardNotFound'>
        <img className='imgCard' src='https://i.gifer.com/1FEk.gif' width="315" height="205" alt="" />
        <span className='textCardNotFound'>Sorry, but we couldn't find any dino to match your search!</span>
        </div> 
      : searching &&
        <div className='loadingHome'>
            <img src='https://www.bibliotecaspublicas.es/churriana-ij/imagenes/contenido40569.gif' width="200" height="200" alt="" />
            <span>Loading..</span>
        </div>                             
      }
    </div>          
  </div>
</div>      
)
};

function mapStateToProps(state) {
    return {
        dinos:state.dinos
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getDinos: dino => dispatch(getDinos(dino)), 
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);