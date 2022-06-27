import React from "react"

import FatiaDeBolo from "../../imgs/fatia-de-bolo.png";
import Pizza from  "../../imgs/pizza.png";
import Suco from "../../imgs/suco.png";

import styled from "styled-components"

const Box = styled.div`
    width:100%;
    padding:12% 9% 15% 9%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const H1 = styled.h1`
    font-family: Hurme Geometric Sans 1;
    font-size: 1.6em;
    letter-spacing: 1.72px;
    color: #373737;
`
const Barra = styled.div`
width: 3.8vw;
margin-top: 2%;
border:solid #373737;

@media (max-width: 500px){
    width: 30%;
    margin: 8% 0 9% 0;
}

/* border-style: solid;
border-bottom-width: 0.1px; 
color:black*/
`
const BoxImgs = styled.div`
margin-top: 4.6%;
display: flex;
align-items: center;

@media (max-width: 500px){
    width: 100%;
    display: flex;
    flex-direction: column;
}   

`
const ImgMain = styled.img`

width: 100%;

/* width: 30vw;
padding: 1%; */


`
const ContainerBolo = styled.div`
width: 31%;


display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;

@media (max-width: 500px){
    width:100%;
    margin:0.1%;
}

`
const BarraCake = styled.div`
width: 14%;
/* width: 2vw;*/
margin: 20% 0 4% 0%;
border:solid #373737 0.70vw;
background-color: #373737;
/* border-style: solid;
border-bottom-width: 0.1px;
color: black; */
`
const H2Img = styled.h2`
margin: 0 0 20% 0;

font-family: Hurme Geometric Sans 1;
font-size: 1.3vw;

letter-spacing: 0px;
color: #373737;
background: white;
@media (max-width: 500px){
    font-size: 5.5vw;
}
`

const ContainerPizza = styled.div`

width: 31%;

display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;

@media (max-width: 500px){
    width:100%;
    margin: 5% 0;
}
`
const BarraPizza = styled.div`
width: 14%;
margin: 20% 0 4% 0%;
border:solid #373737;

border-style: solid;
border-bottom-width: 0.1px;
color: black;

@media (max-width: 500px){
    font-size: 5.5vw;
}
`

const ContainerCopo = styled.div`
width: 31%;


display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;

@media (max-width: 500px){
    width:100%;
    margin: 5% 0;

}
`
const BarraSuco = styled.div`
width: 14%;
margin: 20% 0 4% 0%;
border:solid #373737;

border-style: solid;
border-bottom-width: 0.1px;
color: black;
`

export default function Fmain(){
    return(
        <Box>
            <H1>LATEST RECIPES</H1>
            <Barra></Barra>
            <BoxImgs>
                <ContainerBolo>
                    <ImgMain src={FatiaDeBolo} alt="fatia-de-bolo"/>
                    <BarraCake></BarraCake>
                    <H2Img>Red Velvet Cake</H2Img>
                </ContainerBolo>
            
                <ContainerPizza>
                    <ImgMain src={Pizza} alt="pizza"/>
                    <BarraPizza></BarraPizza>
                    <H2Img>Margherita Pizza</H2Img>
                </ContainerPizza>
            
                <ContainerCopo>
                    <ImgMain src={Suco} alt="suco"/>
                    <BarraSuco></BarraSuco>
                    <H2Img>Peanut Smoothie</H2Img>
                </ContainerCopo>
            </BoxImgs>
        </Box>
    )
}