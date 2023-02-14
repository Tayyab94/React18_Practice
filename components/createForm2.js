import React, { useRef, useState } from 'react'



// Validation, Error-Handling, Error-message, Satate-handling, external-Libraries, => the best one is formik (formik.org)

const CreateForm2 = () => {
   const userName= useRef("");
   const useremail = useRef("");
  const f= useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
      const name = userName.current.value;
      const email = useremail.current.value;
      const ff= f.current.files[0].name;

      console.warn(ff);
      const person={
        "userName":name,
        "userEmail":email
      }

      console.warn(person)
    }
 
    return (
    <div>
      <div className='row'>
      <div className='col-9 col-md-offset-2'>
        <form method='POST'  onSubmit={handleSubmit}>
          <div className='form-group'>
          <label htmlFor="firstName">First Name</label>
            <input type="text" ref={userName} />
          </div>

          <div className='form-group'>
          <label htmlFor="emailAddress"> Email Address</label>
            <input type="text" ref={useremail} />
          </div>
          
          <div className='form-group'>
          <label htmlFor="emailAddress">Choose File</label>
            <input type="file" ref={f} />
          </div>

          <button type='submit' className='btn btn-primary btn-sm'>Click Form</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateForm2
