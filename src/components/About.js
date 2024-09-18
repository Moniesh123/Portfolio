import Moniesh1Image from '../assets/Moniesh1.jpg'; 
 


function About(){
    
    
    const handleButtonClick = () => {
        window.open('https://drive.google.com/file/d/17lcnlbkT5BHVISvBR7FSTWkSORy5B9D-/view', '_blank'); 
    };
    
    
    return(
        <div className="About-container scrollbar">
            <h1 className="border">About Me</h1>
            
            <div className='img-inform'>
            <img src={Moniesh1Image} alt="Description" className="my-image" />
            <div className='information'>
            <h1>My Name Is Moniesh Vemula</h1><br/>
            <h3>I am a recent graduate with a Bachelor of Science in Information Technology from <br/>
                MCC College. I am from Mumbai and passionate about Front End Developer,<br/>
                 eager to dive into the world of web technologies. My interest lies in crafting efficient,<br/>
                  user-friendly web applications and bringing innovative ideas to life through code.<br/>
                   As a fresher, I am enthusiastic about learning new technologies and continuously <br/>improving
                    my skills to deliver high-quality solutions.</h3><br/>
                    <h2>"The only way to do great work is to love what you do."</h2><br/>
                    <h3>I am excited to contribute to projects that make a difference and look forward to growing<br/> professionally in the dynamic field of web development.</h3>
            </div>
            
            </div>
            <button onClick={handleButtonClick} className='resume'>Resume</button>
        </div>
    )
}
export default About;