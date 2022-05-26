import React,{useState } from 'react'
import user from "./user.png"
const Hero = (props) => {
    const {handleLogout}=props;
    const [image,setImage]=useState(user)
    const[name,setName]=useState('User')

    function imageHandler(e){
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setImage(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
   
    function handleClick(){
        const target = document.getElementById("third");
        console.log(target);
        if (target.style.display !== "none") {
            target.style.display = "none";
          } else {
            target.style.display = "flex";
          }
            
          
    }
    
    function handleClck(){
        const target = document.getElementById("third");
        console.log(target);
        if (target.style.display !== "none") {
            target.style.display = "none";
          } else {
            target.style.display = "flex";
          }   
    }

    const onChangePicture = e => {
         console.log('picture: ', image);
        setImage(e.target.files[0]);
    };
    

    return(    
        <section className='hero'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="profile" id="second">
                <div className="profile1">

             <img src={image} alt="Profile Photo" />
            <h1> {name}</h1>
                </div>
            <button id="btn" onClick={handleClick}>Edit Profile</button>
            </div>
            <div className="form" id="third" >
                <label >Name</label>
                <input type="text" onChange={e => setName(e.target.value)}  />
                <label >Upload File(png format)</label>
                <input type="file" onChange={imageHandler} />
                <button onClick={handleClck}>Submit</button>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Hero
