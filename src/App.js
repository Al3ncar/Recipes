import React from "react"

import Header from "./components/header"
import Main from "./components/main"
import GlobStyle from "./styled"

export default function App(){
  return(
    <main>
      <GlobStyle/>
      <Header/>
      <Main/>
    </main>
  )
}
