import React,{useState} from "react";
import {Link} from 'react-router-dom' //Declaration//
// import { db } from "../firebase";

const LinkForm = (props) => {

    const initialStateValues = {
        fecha:'',
        granja: '',
        cantidad:''
    };

    const [values,setValues]  = useState(initialStateValues); 

    const handleInputChange = e =>{
      const {name, value} = e.target;
      setValues({...values, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addOrEditLink(values);
        setValues(initialStateValues)
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group input-group">
           {/* <div className="input-group-text bg-light">
            <i className="material-icons">insert_fecha</i>
           </div> */}
        <input 
        type="date" 
        className="form-control" 
        placeholder="Insertar fechas" 
        name="fecha"
        onChange={handleInputChange}
        value={values.fecha}
        />
        </div>

        <div className="form-group input-group">
          {/* <div className="input-group-text bg-light">
           <i className="material-icons">create</i>
          </div>  */}
          <input 
          type="text" 
          className="form-control" 
          name="granja" 
          placeholder="Nombre de la granja" onChange={handleInputChange}
            value={values.granja}
          />
        </div>

        <div className="form-group">
          <textarea name="cantidad" 
          rows="3" 
          className="form-control"
          placeholder="Cantidad recojida" onChange={handleInputChange}
          value={values.cantidad}
          ></textarea>
        </div>

        <button className="btn btn-primary btn-block">
          Guardar 
        </button>
        <Link to="/nuestrasgranjas"><h1>atras</h1></Link>
        </form>
    )
};
export default LinkForm; 