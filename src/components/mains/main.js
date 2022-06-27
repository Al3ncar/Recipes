import React from "react";
import Fmain from "./fmain";
import Smain from "./Smain";
import styled from "styled-components";
const Main = styled.main`
width:100%;
background: #F2F4F1;
margin-top:1.2vw; 
`
export default function App(){
    return(
        <Main>
            <Fmain/>
            <Smain/>
        </Main>
    )
}