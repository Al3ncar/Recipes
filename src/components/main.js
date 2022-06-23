import React from "react";
import styled from "styled-components";
import FatiaDeBolo from "../imgs/fatia-de-bolo.png";
import Pizza from  "../imgs/pizza.png";
import Suco from "../imgs/suco.png";

const Main = styled.main`
background: #F2F4F1;
height: 65vw;
margin-top:1.2vw; 
`
const Box = styled.div`
display: flex;
align-items: center;
flex-direction: column;
transform: translate(0%, 20%);
`
const H1 = styled.h1`
font-family: Hurme Geometric Sans 1;
font-size: 1.6em;
letter-spacing: 1.72px;
color: #373737;
`
const Barra = styled.div`
width: 3.8vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 0.9vw;
`
const BoxImgs = styled.div`
margin-top: 4.6vw;
display: flex;
align-items: center;
`
const ImgMain = styled.img`
width: 30vw;
padding: 1vw;
position: relative;
bottom: 2vw;
`
const ContainerBolo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;
width: 31%;
height: 35vw;
`
const BarraCake = styled.div`
width: 2vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 3vw;
`
const H2Img = styled.h2`
font-family: Hurme Geometric Sans 1;
font-size: 1em;
letter-spacing: 0px;
color: #373737;
background: white;
margin-top: 1.4vw;
`

const ContainerPizza = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;
width: 31%;
height: 35vw;
`
const BarraPizza = styled.div`
width: 2vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 0.9vw;
margin-top: 3vw;
`

const ContainerCopo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
background: white;
box-shadow: 0px 7px 6px #00000029;
width: 31%;
height: 35vw;
`
const BarraSuco = styled.div`
width: 2vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 0.9vw;
margin-top: 3vw;
`


export default function App(){
    return(
        <Main>
            <Box>
            <H1>Latest Recipes</H1>
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
           
        </Main>
    )
}