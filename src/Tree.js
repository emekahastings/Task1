import image from './Emeka.jpg'
import slack from './slack.png'
import text from './Footer text.jpg'
import icon from './Icon.png'
import IG from './I4G.jpg'
import { BrowserRouter as Router } from 'react-router-dom'
import zuri from './Zuri.Internship_Logo.jpg'
import  social from './Social icon.jpg'

const Tree=()=>{
    return(
      <div className='app'>
        <div className='container' >
          <div className='first' >
            <div className='imagecont'> 
          
    <img src={image} className='amaka' alt='' /> 
    <img src={icon} className='dots' alt='' /> 
            </div>
            <b className='name'>Emeka Hastings</b>
            </div>
         
            <Router>
          <div className='linkcont'>
            
           <a href="http://twitter.com/EmekaHastings">  <button id='twitter'  >Twitter Link</button> <br /> </a>
          <a href="https://training.zuri.team/" >  <button  id='btn_zuri' >Zuri team</button> <br /> </a>
           <a href='https://books.zuri.team'>  <button  id='books' >  Zuri books</button> <br /> </a> 
           <a href='https://books.zuri.team/python-for-beginners?ref_id=<EmekaHastings>' >  <button  id='python' >Python Books</button> <br /> </a>
           <a href='https://background.zuri.team'>  <button  id='pitch' >Background check for coders</button> <br /> </a>
           <a href='https://books.zuri.team/design-rules'>  <button  id='book_design' >Design Books</button> <br /> </a>
 
          </div>
          </Router>
          <div className='footer'>
          <img src={slack} className='slack' alt='' /> <br /> 
          <img src={social} className='git' alt='' /> <br /> 
          </div>
        </div>

        <div className='last' >
        <img src={zuri} className='bot' alt='' /> <br /> 
        <img src={text} className='bot two' alt='' /> <br /> 
        <img src={IG} className='bot three ' alt='' /> <br /> 
        </div>
        
        

      </div>
    )
}

export default  Tree
