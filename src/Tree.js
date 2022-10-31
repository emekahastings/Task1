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
          
    <img src={image} className='amaka' id='profile__img' alt='' /> 
    <img src={icon} className='dots' alt='' /> 
            </div>
            <b className='name' id='twitter'>Emeka Hastings</b> <br />
            <b className='name' id='slack'>emekahastings</b>
            </div>
         
            <Router>
          <div className='linkcont'>
            
          <a href="https://training.zuri.team/" id='btn_zuri' > Zuri team </a> <br />
           <a href='https://books.zuri.team' id='books' >   Zuri books <br />   </a>  <br />         
           <a href='https://books.zuri.team/python-for-beginners?ref_id=<EmekaHastings>' id='python' >  Python Books  </a> <br />
           <a href='https://background.zuri.team'  id='pitch' > Background check for coders  </a> <br />
           <a href='https://books.zuri.team/design-rules' id='book_design' > Design Books </a>  <br />
 
          </div>
          </Router>
          <div className='footer'>
          <img src={slack} className='slack' alt='' /> <br /> 
          <img src={social} className='git' alt='' /> <br /> 
          </div>
        </div>
    {/* <hr/> */}
        <div className='last' >
        <img src={zuri} className='bot one' alt='' /> <br /> 
        <img src={text} className='bot two' alt='' /> <br /> 
        <img src={IG} className='bot three ' alt='' /> <br /> 
        </div>
        
        

      </div>
    )
}

export default  Tree
