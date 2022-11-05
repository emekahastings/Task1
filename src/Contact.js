import texts from './Footer text.jpg'
import IG from './I4G.jpg'
import zuri from './Zuri.Internship_Logo.jpg'
import { useState } from 'react'


const Contact=()=>{
  let [text, settext]= useState('')
  let [error, seterror]= useState('')

  function shine(event){
    settext(event.target.value)
     console.log(event.target.value)
    }
    function submit(){
  
          if(text==='' ){
          seterror({
            message:'Please Enter a message'
          })
          console.log('Empty')
        }  
        }

    return(
      
       <div className='intro'>
        <h1>Contact Me</h1>  
      <p className="hi">  Hi there, contact me to ask about anything you have in mind  </p> 
       
       <div className="lol">
         <p>First Name</p> 
        <input type={'text'} className='first' required id="first_name" placeholder="Enter tyour first Name" />

        <p>Last Name</p> 
        <input type={'text'} className='lastt' id="last_name" placeholder="Enter your last name" />
      </div>

      <p className="oda">Email</p>
      <input type={'email'} className='email' id='email' placeholder="yourname@email.com" required  />

      <p className="oda">Message</p>
      <textarea className="area" rows='6' cols={'64'} placeholder='Send me a message and i will reply as soon as possible'  onChange={shine}  >
     
      </textarea> 
      <p className='error' >{error.message}</p>
       <br />
     
     <div className="check">
      <input type={'checkbox'} className='checkbox'  />
       <p className="checktext">You agree to provide your name(data) to whoever contacts you</p>
       </div>

       <div className="su">
        <button type={'submit'} className='submit' id='btn__submit' onClick={submit}>Submit</button>
       </div>

       <div className='last' >
        <img src={zuri} className='bot one' alt='' /> <br /> 
        <img src={texts} className='bot two' alt='' /> <br /> 
        <img src={IG} className='bot three ' alt='' /> <br /> 
        </div>
       </div>
     
    )
}

export default Contact
