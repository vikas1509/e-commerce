import React from 'react'
import Input from '../../components/Input'
import "./Colors.css"
const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>

      <label className='sidebar-label-container' >
  <input onChange={handleChange} type='radio' value="" 
  name='test'/>
  <span className='checkmark all'></span>All
</label>

<Input handleChange={handleChange} value="black"
 title="Black" name="test1" color="black" />

<Input handleChange={handleChange} value="blue"
 title="blue" name="test1" color="blue" />

 <Input handleChange={handleChange} value="red"
 title="red" name="test1" color="red" />

 <Input handleChange={handleChange} value="Green"
 title="Green" name="test1" color="Green" />

 <Input handleChange={handleChange} value="white"
 title="white" name="test1" color="white" />
    </div>
  )
}

export default Colors