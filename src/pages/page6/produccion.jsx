import React from "react"
import Header from '../../components/Header'
import BodyP from "../../components/BodyP"
import Footer from '../../components/Footer'
import Calendar from 'react-calendar'


function produccion () {

	return(
	<>
	  <Header/>
      <BodyP/>
	  <Calendar />
	  <Footer/>
	</>
	) ;
}
export default produccion