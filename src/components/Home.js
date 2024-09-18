import React from 'react';
import laptopImage from '../assets/laptop.avif'; 
import codingboy1Image from '../assets/codingboy1.jpg'; 

function Home() {
    return (
             
        <div className="home-container">
            <img src={codingboy1Image} alt="Description" className="left-image" />
            
            <div className='text'>
            <h1>Hello"</h1><br/>
               <h1> I Am Moniesh</h1><br/>
                <h2>Front End Developer & Web Designer</h2>
            </div>
           < div className='wave'> 
        </div>
        </div>

    );
}

export default Home;