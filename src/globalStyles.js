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
#menu ul, a{
    width: 94.9%;
    margin-top:-1px;
    padding-top:5px;
}
#menu img{
    height:56px;
    width:auto;
}
#menu a{
  display:block;
}
/*------------------------------------FOOTER----------------------- */
.derechos{
    display: flex;
    background: rgba(180, 1, 9, 2);
    justify-content: space-between;
    font-size: 15px;
    padding-left:150px;
    padding-right:50px;
}
.derechos a{
    padding:5px 0px 5px 0px;
    color:white;
    text-decoration:none; 
}
.redessociales{
    display: flex;
    background:#CB262A;
    color:#FFF;
    padding:10px 0px 20px 25px;
}
.redessociales, li{
    text-decoration:none;
    display: flex;
    background:#CB262A;
    color:#FFF;
}
.redessociales img{
    display:flex;
    height:70px;
    width:auto;
    padding-left:30px;
    padding-top:20px;
}
.persona1{
    padding-left:50px;
    text-align:left;
}
.persona img{
    height:13px;
    width:auto;
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