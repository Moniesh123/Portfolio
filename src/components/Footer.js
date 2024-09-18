
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub ,faLinkedin,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Change this line


function Footer(){
    const handlegithub=()=>{
        window.open('https://github.com/Moniesh123/','_blank')
}
    const handlelinkedln=()=>{
        window.open('https://www.linkedin.com/in/moniesh-front-end-developer/','_blank')
    }
    const handlemail=()=>{
        window.open('mailto:moniesh06@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20more%20information.', '_blank')
    }
    const handlwhatsapp=()=>{
        window.open('https://wa.me/918080514833?text=Hello%2C%20I%20am%20interested%20in%20your%20services', '_blank')
    }

    return(
        <div>
            <hr></hr>
            <h2 className="connect">Let's Connect DIGITALLY........</h2>
            <div className="contacts">
            <h3 className="created"> &copy; 2024 Created By Moniesh Vemula</h3>
            <div className="social-icons">
            <FontAwesomeIcon icon={faEnvelope} className='icon5' onClick={handlemail}/>
            <FontAwesomeIcon icon={faLinkedin} className='icon4' onClick={handlelinkedln} />
          <FontAwesomeIcon icon={faSquareGithub} className='icon3' onClick={handlegithub} />
          <FontAwesomeIcon icon={faWhatsapp} className='icon6'onClick={handlwhatsapp}/>
        </div>
        
            </div>
        </div>
    )
}
export default Footer;