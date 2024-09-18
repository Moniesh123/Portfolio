import React from 'react';
import todolistImage from '../assets/todolist.png'; 
import tailorImage from '../assets/Tailor.png'; 
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub ,faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Project() {

    const handlegithub1=()=>{
            window.open('https://github.com/Moniesh123/To-Do-List','_blank')
    }
    const handlegithub2=()=>{
        window.open('https://github.com/Moniesh123/DarjeeFrontend','_blank')
}
    const handlelinkedln=()=>{
        window.open('https://www.linkedin.com/in/moniesh-front-end-developer/','_blank')
    }
    return (
        <div className="project-container scrollbar">
            <h1 className="project-border">Projects</h1>
            <div className="projects">
                
                <div className="project1">
                    <img src={todolistImage} alt="Description" className="todolist-image1" />
                    <h3 className='h3'>TODOLIST PROJECT</h3>
                    <h3 className='h3'>(Angular Js)</h3>
                    
                    <h4 className='h4'>Full To-Do List Application</h4>
                    <div className="icon-container" >
                        <FontAwesomeIcon icon={faSquareGithub} className='icon1' onClick={handlegithub1} />
                        <FontAwesomeIcon icon={faLinkedin} className='icon2' onClick={handlelinkedln}/>
                    </div>
                </div>


                <div className="project1">
                    <img src={tailorImage} alt="Description" className="todolist-image2" />
                    <h3 className='h3'>TAILOR BUSINESS WEB APPLICATION PROJECT</h3>
                    <h3 className='h3'>( MEAN STACK TEAM PROJECT )</h3>
                    
                    <h4 className='h4'>User Purchase Cloths And Make Appointment With Tailors.</h4>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faSquareGithub} className='icon1' onClick={handlegithub2}/>
                        <FontAwesomeIcon icon={faLinkedin} className='icon2' onClick={handlelinkedln}/>
                    </div>
                </div>
               
            </div>
            <h1 className='scroll'>Thank You For Scrolling</h1>
            
            <Footer/>
        </div>
    );
}

export default Project;