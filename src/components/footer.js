import React from 'react';
import Insta from "../imgs/insta.svg"
import Twt from "../imgs/twt.svg"
import Fc from '../imgs/fc.svg'
import Pint from "../imgs/pint.svg"
import styled from "styled-components"
  const ContSubs = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column  ;
    background-color:#DFE4DE ;
    @media(max-width:500px){
      padding:14% 0;
    }
  `
  const BoxSubs = styled.div`
    width: 100%;
    margin: 6% 0 3% 0;
    text-align:center;
  `
  const  TitsSubs = styled.h2`
    width: 100%;
    padding-bottom: 1%;
    font-size: 2.2vw;
    @media(max-width:500px){
      font-size: 8vw;
    }

  `
  const PSubs = styled.p`
    width:100%;
    font-size: 1.3vw;
    @media(max-width:500px){
      font-size: 6vw;
    }
  `
  const ContInp = styled.div`
    width: 100%;
    padding:2% 0 1% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
  const InputSub = styled.input`
    width: 40%;
    background-color: #EFF1EE;
    padding:1.6%;
    font-size: 1.1vw;
    outline: none;
    border: none;
    @media(max-width:500px){
      width:85%;
      padding:4%;
      font-size: 3vw;
    }
  `
  const BtnSub = styled.input`
    width:16%;
    padding:1.2%;
    border: none;
    outline:  #373737 solid 0.3vw ;
    background: transparent;
    margin: 4% 0 8% 0;
    font-size:1.1vw;
    @media(max-width:500px){
      width:85%;
      padding:4%;
      font-size: 3vw;
    }
  `
  const ContFot = styled.section`
    width:100%;
    padding: 6% 0 2% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:500px){
      width:100%;
      flex-direction:column-reverse;
    }
  `
  const ContImgs = styled.div`
    width: 30%;

    display: flex;
    justify-content: center;
    @media(max-width:500px){
      width:100%;
      
    }
  `
  const BoxImg = styled.div`
    width:10%;
    margin-left: 3%;
  `
  const Redes = styled.img`
    width:100%;
  `
  const ContList = styled.nav`
    width:45%;
    @media(max-width:500px){
      width:100%;
      padding:4% 0 0 0;

    }
  `
  const List = styled.ul`
    width:100%;
    display:flex;
    justify-content:space-between;
    @media(max-width:500px){
      width:100%;
      flex-direction: column;
      padding:4%;
    }
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
    @media(max-width:500px){
      width:100%;
      margin-top:3%;
      font-size:3.8vw;
    }
  `

export default function Footer() {
  return(
    <main>
        <ContSubs>
            <BoxSubs>
                <TitsSubs>SUBSCRIBE</TitsSubs>
                <PSubs>Sign up for newsletter</PSubs>
            </BoxSubs>
            <ContInp>
              <InputSub type="email" name="email" placeholder="Your Email"/>
              <BtnSub type="submit" value="SUBMIT"/>
            </ContInp>
        </ContSubs>
        <ContFot>
          <ContImgs>
            <BoxImg>
              <Redes src={Insta} alt="insta"/>
            </BoxImg>
            <BoxImg>
              <Redes src={Twt} alt="twt"/>
            </BoxImg>
            <BoxImg>
              <Redes src={Fc} alt="face"/>
            </BoxImg>
            <BoxImg>
              <Redes src={Pint} alt="pint"/>
            </BoxImg>
          </ContImgs>
          <ContList>
            <List>
              <Items>ABOUT</Items>
              <Items>RECIPES</Items>
              <Items>SUBSCRIBE</Items>
            </List>
          </ContList>
        </ContFot>
    </main>
  )
}
