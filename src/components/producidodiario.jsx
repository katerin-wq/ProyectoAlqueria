import React, {useEffect, useState} from "react";
import LinkForm from "./LinkForm";
import '../utils/css/BodyProducido.css'
import { toast } from 'react-toastify'
import { db } from '../firebase';
import borrar from '../utils/images/remove.png'
import editar from '../utils/images/edit.png'
import {Link} from 'react-router-dom' //Declaration//


const Links = () => {
   
  const [links, setLinks] = useState([]);
    const [currentId, setCurrenId] = useState('');

   const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
        toast("Nuevo registro", {
          type: "success",
          autoClose: 1500,

        });
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        toast("Registro actualizado", {
          type: "info",
          autoClose: 1500,

        });
        setCurrenId("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onDeleteLink = async (id) => {
    if (window.confirm("¿Estas seguro de querer eliminar este registro?")) {
      await db.collection("links").doc(id).delete();
      toast('Registro eliminado', {
        type: "error",
        autoClose: 1500,
      })  
     }
  };
  const getLinks = async () =>{
    db.collection("links").onSnapshot((querySnapshot) =>{
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id:doc.id});
      });
      setLinks(docs)
    });

  }
  useEffect(() => {
    getLinks();
  },[]);

  return (
  <div>
  <div className="frase1">
  <i>“Cuando un hombre acierta a vivir su vida en el campo, como presumo que muchísimos lo consiguen,
   <br></br>disfruta de un bienestar mucho mayor que el cantado en las descripciones pastoriles de los poetas,
   <br></br>o en el aislamiento lleno de vanagloria celebrado por los filósofos.”</i>
  <br></br>ㅤ
  <br></br>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
   <i>— Sir Richard Steele, libro: "bienestar, campo, vivir"</i>
</div>
        <div className="formulario2">
        <LinkForm {...{ addOrEditLink, currentId, links }} />
        </div>
      <div className="formulario2">
        {links.map(link => (
          <div className="card mb-1 pd-2" key={link.id}>
           <div className="card-body">
              <div className="d-flex justify-content-between">
              <h4>{link.fecha}</h4>
               <div>
               <img id="borrar" src={borrar} alt="Cargando..." 
              onClick={() => onDeleteLink(link.id)}
              delete/>
ㅤ
              <img id="editar" src={editar} alt="Cargando..." 
              onClick= {() => setCurrenId(link.id)} 
              />
               </div>
              </div>
            <a>{link.granja}</a> 
            <a>{link.cantidad}</a>
           </div>
          </div>
        ))}
      </div>
      <div id="volver">
        <Link to='/ProyectoAlqueria/opciones'><h1>ㅤAtrasㅤ</h1></Link>
      <div id="volver">
        <Link to='/ProyectoAlqueria/nuevagranja'><h1>Nueva granja</h1></Link>
      </div>
      </div>
  </div>
  );
};

export default Links;