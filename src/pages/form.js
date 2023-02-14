import CreateForm from 'components/createForm'
import CreateForm1 from 'components/createForm1'
import CreateForm2 from 'components/createForm2'
import React from 'react'
import styles from "./../styles/form.module.css"
const Form = () => {
  return (
    <div className={styles.twodiv}>
      <CreateForm />
      <CreateForm1 />
      <CreateForm2 />
    </div>
  )
}

export default Form
