import React from 'react'
import '../styles/Projects.css'
import notes from '../assets/todolist.jpg'
import gym from '../assets/Fitness app icon.jpeg'
import clipboard from '../assets/clipboard.jpeg'
import git from '../assets/icons/github-icon.png'
import linkedin from '../assets/icons/linkedin-icon.png'
const Projects = () => {
  return (
    <section id='project-sec'>
      <h2 className='headings' >Explore My Popular <span className='headings-span'>Projects</span></h2>
      <div id='projects'>

        <div className='prj-div'><img id='gym-logo' src={gym} alt="Gym logog"/></div>

        <div className='con-div'>
          <h6>Project Design</h6>
          <h3>Gym landing : My first project</h3>
          <p>My first static project after learning HTML, CSS. A gym landing page where member can see plans.</p>
          <div className='git-linked'> 
          <a href='https://github.com/madhur2025/Gym-Landingpage-UI'><img src={git}/></a>
          <a href='https://www.linkedin.com/posts/madhusudan-sharma-k24169_html-css-activity-7314154065339301889-U37f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkeXqQBynPDnInK02fsXDPskha3j0aCf3M'><img src={linkedin}/></a>
          </div>
        </div>

        <div className='prj-div'><img src={clipboard} alt="Clipboard"/></div>
        <div className='con-div'>
          <h6>Project Design</h6>
          <h3>To-Do List : My second project</h3>
          <p>My second project after learning HTML, CSS, JavaSacript where user can add task, check / uncheck, delete task.</p>
          <div className='git-linked'> 
          <a href='https://github.com/madhur2025/To-Do_List'><img src={git}/></a>
          <a href='https://www.linkedin.com/posts/madhusudan-sharma-k24169_html-css-js-activity-7314156230241832961-Pw1w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkeXqQBynPDnInK02fsXDPskha3j0aCf3M'><img src={linkedin}/></a>
          </div>
        </div>



        <div className='con-div'>
          <h6>Project Design</h6>
          <h3>NoteSafe : Web Application With CRUD</h3>
          <p>NoteSafe A react aplication without any database, where user can Create, Read, Update, Delete opertations.</p>
          <div className='git-linked'> 
          <a href='https://github.com/madhur2025/Note-Saver-By-React'><img src={git}/></a>
          <a href='https://www.linkedin.com/posts/madhusudan-sharma-k24169_react-activity-7317819299883016192-K-Zo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkeXqQBynPDnInK02fsXDPskha3j0aCf3M'><img src={linkedin}/></a>
          </div>
        </div>
        <div className='prj-div'><img id='notes-img' src={notes} alt="NoteSafe"/></div>



        <div className='con-div'>
          <h6>Project Design</h6>
          <h3>Gym landing : My first project</h3>
          <p>My first static project after learning HTML, CSS. A gym landing page where member can see plans.</p>
          <div className='git-linked'> 
          <a href='https://github.com/madhur2025/Gym-Landingpage-UI'><img src={git}/></a>
          <a href='https://www.linkedin.com/posts/madhusudan-sharma-k24169_html-css-activity-7314154065339301889-U37f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkeXqQBynPDnInK02fsXDPskha3j0aCf3M'><img src={linkedin}/></a>
          </div>
        </div>
        <div className='prj-div'><img id='gym-logo' src={gym} alt="Gym logog"/></div>
      </div>
    </section>
  )
}

export default Projects