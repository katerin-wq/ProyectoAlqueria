import React, {useEffect} from "react";
import LinkForm from "./nuevagranja";


import { db } from '../firebase';


const Links = () => {
  
   const addOrEditLink = async (linkObject) => {
   await db.collection ("links").doc().set(linkObject);
   console.log('new task added');
  }

  const getLinks = async () =>{
    const querySnapshot = await db.collection('links').get();
    querySnapshot.forEach(doc => {
      console.log(doc.data())
    })
  }
  useEffect(() => {

  },[]);

  return (
    <>
   <LinkForm addOrEditLink={addOrEditLink}/>
   </>
   );
};
export default Links;