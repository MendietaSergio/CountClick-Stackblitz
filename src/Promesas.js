import React from "react"
import Objeto from "./Objeto"

const getFetch = new Promise ((res)=>{
  setTimeout(()=>{
    res()
  },3000)
})


const Promesas = ( ) =>{
  // getFetch
  // .then(res=>{
  //   console.log(res)
  // })
  return (
    <>
    <h2>MAP</h2>
    {Objeto.map(objet =>  {
      return <div key={objet.id}>{objet.description} </div>
    })}
    </>
  )
}
export default Promesas;