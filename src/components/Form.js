import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Banner from './Banner'
function Form() {
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h1>Login</h1>
                       <div className='logo'>  <FacebookRoundedIcon/>  <TwitterIcon/></div>

                <p>or use your account</p>

                <form id='form' className='flex flex-col'>
                    <input type="text" placeholder='Email'/>
                    
                    <input type="text" placeholder='Password'/>

                       <p className='password'> Forgot your Password?</p>
                     <button className='btn'>LOG IN</button>
                    </form> 
            </div>

                <Banner/>
        </div>
    </section>
  )
}

export default Form