import React from "react";
import styled from "styled-components";
import FatiaDeBolo from "../imgs/fatia-de-bolo.png";
import Pizza from  "../imgs/pizza.png";
import Suco from "../imgs/suco.png";
import Colher from "../imgs/colher.png";

const Main = styled.main`
background: #F2F4F1;
height: 100vw;
margin-top:1.2vw; 
`
const Box = styled.div`
display: flex;
align-items: center;
flex-direction: column;
transform: translate(0%, 10%);
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

const BoxAbout = styled.div`
display: flex;
height: 50vw;
`
const ImgSpoon= styled.img`
width: vw;
height: 50vw;
margin-top: 10vw;

`
const ContainerAbout = styled.div`
background: white;
height:45vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 10vw;

`
const H2About = styled.h2`
font-family: Hurme Geometric Sans 1;
letter-spacing: 1.72px;
color: #373737;
margin-top: 3vw;
font-size: 1.3em;
`
const BarraAbout = styled.div`
width: 2.5vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 1vw;
`
const ParagrafoAbout = styled.p`
width: 60%;
font-family: Hurme Geometric Sans 1;
font-size: 0.8em;
letter-spacing: 0px;
color: #373737;
margin-top: 5vw;
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
                <BoxAbout>
                    <ImgSpoon src={Colher} alt="colher"/>
                    <ContainerAbout>
                    <H2About>ABOUT</H2About>
                    <BarraAbout></BarraAbout>
                    <ParagrafoAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, <br/>eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</ParagrafoAbout>
                    </ContainerAbout>
                </BoxAbout>
            </Box>
           
        </Main>
    )
}