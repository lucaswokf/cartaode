import React from "react";
import'./Cartao.css';
import logo1 from  '../assets/magalu.png';

function  Cartao(){
    return(
        <>
        <header></header>

        <img src={logo1} alt="magalu"  className="logo"/>
        <h1>Magazine luiza </h1>
        <p>📱Entrega rápida,atendimento top.   </p>
        <p className="p2">💳 E o melhor: cabe no seu bolso!</p> 
        <p className="pp">✨Vem ser feliz com a gente</p>
        <button>linkedin</button>


        </>

    );

};
export default Cartao;