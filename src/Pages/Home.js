import React from 'react'
import './pagesCss/Home.css'
//import krish from '../Image/krish.pdf'
import krishna from '../Image/krishna.jpeg'
import krishnamishracv from "../Image/krishnamishracv.pdf"
const Home = () => {
  return (
    <div className='Home'>
        <div className='div__left'>
           <section className='first'>
            <h1>HI,</h1>
           <h1>MY NAME</h1> 
              <h1>IS</h1> 
           </section>

            <section className='second'>
            <h1 style={{color:"blue"}}>Krishna Kumar Mishra</h1>
            <h1>FULLSTACK DEVELOPER</h1>
            <h2>I build things for web</h2>
            </section><br /><br />
            {<button><a href={krishnamishracv} download={krishnamishracv}>Download Resume</a></button> }
      

        </div>

        <div className='div__rigth'>
             <img src={krishna} alt="error" />
        </div>

    </div>
  )
}

export default Home