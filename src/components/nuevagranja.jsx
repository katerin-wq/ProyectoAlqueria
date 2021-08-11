import React, {useEffect, useState} from "react";
import LinkForm from '../Components/Links';
import { toast } from 'react-toastify'
import { db } from '../firebase';
import borrar from '../utils/images/remove.png'
import editar from '../utils/images/edit.png'
import {Link} from 'react-router-dom' //Declaration//

import '../utils/css/BodyNuevagranja.css'

const Links = () => {
   
  const [links, setLinks] = useState([]);
    const [currentId, setCurrenId] = useState('');

   const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
        toast("Nueva Granja Añadida", {
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
    if (window.confirm("¿Estas seguro de quieres eliminar esta granja?")) {
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
        <div className="col-md-5 pd-2">
        <LinkForm {...{ addOrEditLink, currentId, links }} />
        </div>
      <div className="col-md-5">
        {links.map(link => (
          <div className="card mb-1 pd-2" key={link.id}>
           <div className="card-body">
              <div className="d-flex justify-content-between">
              <h3>{link.granja}</h3>
               <div>
               <img id="borrar" src={borrar} alt="Cargando..." 
              onClick={() => onDeleteLink(link.id)}
              delete/>
              ㅤ 
              <img id="editar" src={editar} alt="Cargando..." 
              onClick= {() => setCurrenId(link.id)} 
              create/>
               </div>
              </div>
            <a>{link.titular}</a> 
            <a>{link.direccion}</a>
            <a>{link.telefono}</a> 
            <a>{link.ciudad}</a>
           </div>
          </div>
        ))}
      </div>
      <div id="volver">
        <Link to='/opciones'><h1>ㅤAtrasㅤ</h1></Link>
      </div>
  </div>
  );
};

export default Links;