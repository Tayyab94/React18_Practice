import React, { useState } from 'react'

const CreateForm = () => {
  const [userName, setUserName]= useState("");
  const [userEmail, setUserEmail] = useState("");

  

  const handleSubmit=(s)=>{
    s.preventDefault();
    console.warn(userName, userEmail)
    alert("Click Btn");
  }
  return (
    <div className='row'>
      <div className='col-9 col-md-offset-2'>
        <form method='POST'  onSubmit={handleSubmit}>
          <div className='form-group'>
          <label htmlFor="userName">User Name</label>
            <input type="text" name="userName"
             value={userName} onChange={(e)=> setUserName(e.target.value)} />
          </div>

          <div className='form-group'>
          <label htmlFor="userEmail">User Email</label>
            <input type="text" name="userEmail"
             value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} />
          </div>

          <button type='submit' className='btn btn-primary btn-sm'>Click Form</button>
        </form>
      </div>
    </div>
  )
}

export default CreateForm
