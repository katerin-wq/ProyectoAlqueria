import React from "react"
import Header from '../../components/Header.jsx'
import Links from "../../components/producidodiario"
import Footer from '../../components/Footer.jsx'
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