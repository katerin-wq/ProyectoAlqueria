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
    if (window.confirm("are you sure you want to delete this link?")) {
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
        <Link to='/opciones'><h1>ㅤAtrasㅤ</h1></Link>
      </div>
  </div>
  );
};

export default Links;