import React from "react"
import Header from '../../Components/header.jsx'
import Links from "../../Components/producidodiario"
import Footer from '../../Components/footer.jsx'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import 'bootswatch/dist/journal/bootstrap.min.css'


const produccion = () =>{
	return(
	<>
	  <Header/>
	  <div className="container p-4">
      <div className="row">
        <Links />
      </div>
      <div>
        <ToastContainer/>
      </div>
	  </div>
	  <Footer/>
	</>
	)
}
export default produccion