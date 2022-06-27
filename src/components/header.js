import React from "react"
import BackRice from "../imgs/backrice.png"

import styled from "styled-components"
    const Header = styled.header`
        width:97%;
        height:100vh;
        margin: 1.5%;
        background-image:url(${BackRice});
        background-repeat:no-repeat;
        background-size:100vw;
        background-position:center 40%;
        display:flex;
        flex-direction:column;
        @media (max-width: 500px){
            background-size:cover;
            background-position: 95% top;
        }
    `
    const ContNav = styled.section`
        width:100%;
        padding: 1% 0;
        display:flex;
        justify-content:space-between;
        align-items:center;
        @media (max-width: 500px){
            display:none;
        }
    `
    const ContTitl = styled.div`
        width:30%;

    `
    const Title = styled.h1`
        width:100%;
        color:#373737;
        font-size:2vw;
        padding: 5% 0 5% 7%;
    `
    const ContList = styled.nav`
        width:45%;
        padding-right:5%;

    `
    const List = styled.ul`
        width:100%;
        display:flex;
        justify-content:space-between;
    `
    const Items = styled.li`
        width:100%;
        font-size:1.1vw;
        list-style:none;
        display:flex;
        justify-content:center;
        padding:3% 7%;
        :hover{
            outline:solid 0.3vw black;
        }
    `
    const ContReci = styled.div`
        width:100%;
        height:100%;
        font-size: 4.2vw;
        color:#373737;
        display:flex;
        align-items:center;
        justify-content: center;

        @media (max-width: 500px){
            font-size: 6vw;
        }
    `
export default function App(){
    return(
        <Header>
            <ContNav>
                <ContTitl>
                    <Title>RC</Title>
                </ContTitl>
                <ContList>
                    <List>
                        <Items>ABOUT</Items>
                        <Items>RECIPES</Items>
                        <Items>SUBSCRIBE</Items>
                    </List>
                </ContList>
            </ContNav>
            <ContReci>
                <h2>RECIPES</h2>
            </ContReci>
        </Header>
    )
}