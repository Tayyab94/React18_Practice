import React, { useState } from 'react'

const CreateForm1 = () => {
    const [person, setPerson]= useState({firstName:"",emailAddress:""})
    const change=(e)=>{
        setPerson({...person, [e.target.value]:[e.target.value]});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.warn(person);
    }
 
    return (
    <div>
      <div className='row'>
      <div className='col-9 col-md-offset-2'>
        <form method='POST'  onSubmit={handleSubmit}>
          <div className='form-group'>
          <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName"
             value={person.firstName} onChange={change} />
          </div>

          <div className='form-group'>
          <label htmlFor="emailAddress"> Email Address</label>
            <input type="text" name="emailAddress"
             value={person.emailAddress} onChange={change} />
          </div>

          <button type='submit' className='btn btn-primary btn-sm'>Click Form</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateForm1
