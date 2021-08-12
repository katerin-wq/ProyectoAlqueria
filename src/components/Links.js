import React,{useState, useEffect } from "react";
import { db } from "../firebase";
// import { db } from "../firebase";
 
const LinkForm = (props) => {

    const initialStateValues = {
        nombredelagranja:'',
        titular:'',
        telefono:'',
        direccion:'',
        ciudad:''
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
    };

    const getLinkById = async (id) => {
      const doc = await db.collection('links').doc(id).get();
      setValues({ ...doc.data() });
    }

    useEffect(() => {
      if (props.currentId === "") {
        setValues({ ...initialStateValues });
      } else {
        getLinkById(props.currentId);
      }
    }, [props.currentId]);

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group input-group">
          <input 
          type="text" 
          className="form-control" 
          name="granja" 
          placeholder="Nombre de la granja" onChange={handleInputChange}
            value={values.granja}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input 
          type="name" 
          className="form-control"
          name="titular"
          placeholder="Nombre Completo del Titular" onChange={handleInputChange}
          value={values.titular}
          ></input>
        </div>

        <br></br>

        <div className="form-group">
          <input 
          type="numbers" 
          className="form-control" 
          name="telefono" 
          placeholder="Telefono de contacto" onChange={handleInputChange}
            value={values.telefono}
          />
        </div>

        <br></br>

        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          name="direccion" 
          placeholder="Direccion de la Granja" onChange={handleInputChange}
            value={values.direccion}
          />

          <br></br>

          <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          name="ciudad" 
          placeholder="Ciudad" onChange={handleInputChange}
            value={values.ciudad}
          />
          <br></br>
        </div>

        </div>

        <button className="btn btn-primary btn-block">
          {props.currentId === '' ? 'Guardar': 'Editar' }
        </button>

        </form>
    )
};
export default LinkForm; 