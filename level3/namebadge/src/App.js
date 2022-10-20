import React, { useState } from 'react'
import Badge from './components/Badge'
import RandomColor from './components/RandomColor'

// hasSubmit ? <Badge /> : '';

export default function App() {
  // const hasSubmit = false;
  const [formData, setFormData] = useState ({
    fName: '',
    lName: '',
    phoneN: '',
    pob: '',
    fFood: '',
    email: '',
    desc: ''
})
const [badges, setBadges] = useState([])
const [isValid, setIsValid] = useState(false) 

const badgeList = badges.map(badge => (<Badge  data={badge}/>))

function handleSubmit(event) {
  event.preventDefault();
  checkValidation()
  if(isValid){
    setBadges(prevFormData => [...prevFormData, formData])
    console.log(formData)
    setFormData({fName: '',
    lName: '',
    phoneN: '',
    pob: '',
    fFood: '',
    email: '',
    desc: ''})
  }
}

function checkValidation() { 
  if(formData.fName.length >= 3) { 
    setIsValid(true)
  }
}

function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
    console.log(formData)
  }
  
  return (
    <div className='formm'>
      <form className='formm' onSubmit={handleSubmit}>
        <div className='container'>
          <input className='inputMe' name="fName" min="3" value={formData.fName} placeholder="Name" type="text" onChange={handleChange}/>
          <input className='inputMe' name="lName" value={formData.lName} placeholder="Last Name" type="text" onChange={handleChange}/>
          <input className='inputMe' name="email" value={formData.email} placeholder="Email" type="text" onChange={handleChange}/>
          <input className='inputMe' name="pob" value={formData.pob} placeholder="Place of Birth" type="text" onChange={handleChange}/>
          <input className='inputMe' name="phoneN" value={formData.phoneN} placeholder="Phone" type="text" onChange={handleChange}/>
          <input className='inputMe' name="fFood" value={formData.fFood} placeholder="Favorite Food" type="text" onChange={handleChange}/>
        </div>
        <div className='bottom2'>
          <input className='desc inputMe' name="desc" value={formData.desc} placeholder="Tell us about yourself" type="text" onChange={handleChange}/>
          <button>SMASH</button>
        </div>
      </form>
      {badgeList}
      <RandomColor /> 
    </div>
    
  )
}



// fName: formData.FName,
//     lName: formData.lName,
//     phoneN: formData.phoneN,
//     pob: formData.pob,
//     fFood: formData.fFood,
//     email: formData.email,
//     desc: formData.desc