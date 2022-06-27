import React from 'react';
import Colher from "../../imgs/colher.png";

import styled from 'styled-components';

const Box = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const BoxAbout = styled.div`
width:100%;
display: flex;
@media (max-width:500px){
   flex-direction:column
    
}
`
const ImgSpoon= styled.img`
width: 50%;
/* margin-top: 10vw;
 */
@media (max-width:500px){
    width:100%;    
}
`
const ContainerAbout = styled.div`
width:50%;
background: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width:500px){
   width:100%;
    
}
`
const H2About = styled.h2`
font-family: Hurme Geometric Sans 1;
letter-spacing: 1.72px;
color: #373737;
margin-top: 3vw;
font-size: 1.3em;
@media (max-width:500px){
  margin-top:13%;
  font-size:5vw;    
}
`
const BarraAbout = styled.div`
width: 2.5vw;
border-style: solid;
border-bottom-width: 0.1px;
color: black;
margin-top: 1vw;
@media (max-width:500px){
   margin-top:5%;
   width:15%;
    
}
`
const ParagrafoAbout = styled.p`
width: 70%;
font-family: Hurme Geometric Sans 1;
font-size: 1.2vw;
text-align:justify;
letter-spacing: 0px;
color: #373737;
margin-top: 5vw;
@media (max-width:500px){
  width:80%;
  text-align:left;

  font-size:3.8vw;
  margin: 5% 0 16% 0;
}
`

export default function Smain() {
  return(
    <Box>
        <BoxAbout>
            <ImgSpoon src={Colher} alt="colher"/>
            <ContainerAbout>
                <H2About>ABOUT</H2About>
                <BarraAbout></BarraAbout>
                <ParagrafoAbout>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, <br/>eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.
                </ParagrafoAbout>
            </ContainerAbout>
        </BoxAbout>
    </Box>
  )
}

