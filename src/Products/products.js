import React from 'react'
import Card from '../components/Card'
import "./Products.css"
const products = ({result}) => {
  return (
   <>
   <section className='card-container'>{result}</section>
   
   </>
  )
}
export default products;