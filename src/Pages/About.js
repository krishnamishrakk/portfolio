import React from 'react'
import './pagesCss/about.css'
export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><br /><br />
          <p>Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
      
        </div>
          <div className='About__second'>
        <h1>Education</h1>
          <section className='stack'>
            <p>Full Stack Developer Bootcamp</p>
            <p>January 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br />
          <hr />
          <section className='stack'>
            <p>Bachelor in Electronics & Communication</p><p>2016 - 2020</p><span>70%</span>
          </section>
          <section className='prep'>
            <p>Institute of engineering, Jiwaji University</p> <p>Gwalior,M.P</p>
          </section>
          <section className='stack'>
            <p>Higher Secondary Education Satna(2016)</p><p>2015 - 2016</p><span>84%</span>
          </section>
          <section className='prep'>
            <p>Excellence School Venkat No-1</p> <p>Satna,M.P</p>
          </section>
          <section className='stack'>
            <p>High School Education Satna-(2014)</p>
            <p>2013 - 2014</p><span>87%</span>
          </section>
          <section className='prep'>
            <p>Excellence School Venkat No-1</p> <p>Satna,M.P</p>
          </section>
        </div>
    </div>
  )
}
