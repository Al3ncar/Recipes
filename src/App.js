import React from "react"

import Header from "./components/header"
import Main from "./components/mains/main"
import Footer from "./components/footer.js"
import GlobStyle from "./styled"

export default function App(){
  return(
    <main>
      <GlobStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
