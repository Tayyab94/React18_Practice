
import Link from "next/link"
import styles  from "./banner.module.css"


const Banner = (props) => {
//   <style jsx>{`
//   .themeFontColor {
//     color: blue;
//   }
// `}</style>
  return (
    
    <header className='row mb-4'>
      <div className='col-4'>
        <img src='./logo.jpg' className={styles.logo} alt="Logo" />
      </div>
      <div className={`col-4 mt-4 ${styles.themeFontColor}`}>
        {props.headerText}
      </div>
      <div className={`col-4  ${styles.navmenu}`}>
        <ul>  
          <li>Home</li>
          <li><Link href={"/form"}> Create From</Link></li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
    
  )
}

export default Banner
