import {createGlobalStyle} from 'styled-components'

const GlobalStyles=createGlobalStyle` 

body{
    margin:0%;
    padding:0%;
    text-decoration:none;
    background:#FAF1E6;
}
/* -------------------- Header styles -------------------- */
#menu{
    background:#CB262A;
    border-bottom: 2px solid white;
    font-family: "poppins" sans-serif;
}
#menu ul,li, a{
    width: 94.9%;
    margin-top:-1px;
    padding-top:5px;
}
#menu img{
    height:56px;
    width:auto;
}
#menu ul{
    display: flex;
    list-style:none;
}
#menu a{
  display:block;
  color: white;
  text-decoration: none;
}
#menu p: hover{
    font-weight: bold;
    border-bottom: 2px solid #FFF;
    transition-duration: 0.1s;
}
#menu ul ul {
  display:none;
}
/*------------------------------------SUBMENU----------------------- */
#submenu{
    display: flex;
    margin-top:-1px;
    margin-left:950px;
    padding:0%;
}
#submenu a{
    color: white;
    text-decoration:none;
    list-style:none;
    padding:6px 0px 10px 0px;
}
#submenu li{
    color: white;
    text-decoration:none;
    list-style:none;
    border-top:2px solid white;
    border-right:2px solid white;
    padding-top:2px;
}
#submenu a:hover{
}
#submenu img{
    height:20px;
    width:auto;
    padding-top:5px;
    padding-right:5px;
}
/*------------------------------------FOOTER----------------------- */
.redondeado{
    margin-top:15px;
    padding:10px 160px 10px 20px;
    border-radius: 47px;
    border:1px solid white;
    font-size:15px;
    font-family:'poppins' sans-serif;
 }
.integrantes{
    display: flex;
    padding-left:12%;
    background-color: #F8C346;
    color:white;
    font-size:20px;
}
#Registrate{
    padding:10px;
    margin-top:32%;
    margin-left:20px;
    background:#CB262A;
    color:#fff;
    display:flex;
    border-radius: 47px;
    font-family:'poppins' sans-serif;
    text-decoration:none;
    list-style:none;
}
a{
    text-decoration:none;
}

h5{
    font-family:'poppins';
    text-align: justify;
    margin: 7%;
}
.redes{
    background:#CB262A;
    border-top:2px solid white;
    margin-top:-1%;
    padding-bottom:10%;
}
.derechos{
    display: flex;
    background: rgba(180, 1, 9, 2);
    justify-content: space-between;
    font-size: 15px;
    padding-left:150px;
    padding-right:50px;
}
.derechos a{
    padding:10px 0px 10px 0px;
    color:white;
    text-decoration:none; 
}
.redessociales, li{
    display: flex;
    background:#CB262A;
    color:#FFF;
    text-decoration:none;
    padding-left:20px;

}
.redessociales img{
    display:flex;
    height:70px;
    width:auto;
    padding-left:80px;
    padding-top:20px;
}
.persona1{
    padding-left:20px;
    text-align:left;
}
.persona0{
    padding-left:20px;
}
.persona{
    padding-left:20px;
}
.persona img{
    height:13px;
    width:auto;
    padding-left:0.9px;
    padding-top:6px;
}
#mail{
    padding-top:9px;
}
.iconos img{
    width:32px;
    height:31px;
    padding:1%;
}
.iconos, a{
  display: flex;                     /* As specified */
}
.padreiconos{
    margin-left:62px;
}
`;

export default GlobalStyles;