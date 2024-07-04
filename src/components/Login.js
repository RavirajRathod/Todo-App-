import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    document.body.style.background = '#373737';
    const navigate = useNavigate();

    const [loginData, setloginData] = useState({
        email: '',
        password: '',
    })

    const inputChangehandler = (e) => {
        setloginData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const [emailTouch, setEmailTouch] = useState(false);
    const [passTouch, setPassTouch] = useState(false);

    const emailValid = (emailTouch == true) && (loginData.email !== "");
    const passValid = (passTouch == true) && (loginData.password !== "") && ((loginData.password).length >= 6);

    const emailInvalid = (emailTouch == true) && (loginData.email === "");
    const passInvalid = (passTouch == true) && ((loginData.password).length < 6);


    const handleBluremail = () => {
        setEmailTouch(true);
    }
    const handleBlurpass = () => {
        setPassTouch(true);
    }



    const login = () => {

        const iddata = JSON.parse(localStorage.getItem("Registerdata"))
        console.log(iddata);

        localStorage.setItem("loginData", JSON.stringify(loginData))

        navigate('/');

    }

    return (
        <div className='container login'>
            <div className='text-white'>
                <div className='reg_title'>
                    <h2 className='fw-bold'>Login</h2>
                    <p>Welcome Back!!</p>
                </div>
                <form>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder='john@doe.com' value={loginData.email} name='email' onChange={inputChangehandler} onBlur={handleBluremail} />
                        {(emailInvalid) && <p id='email'>Email is Required.</p>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder='Your Password' value={loginData.password} name='password' onChange={inputChangehandler} onBlur={handleBlurpass} />
                        {(passInvalid) && <p id='pass'>Password must contain 6 or more Letters.</p>}
                    </div>

                    <div className='reg_btn'>
                        <button type="submit" onClick={login} class={`btn btn-danger lbtn ${(emailValid && passValid) ? '' : 'disabled'}`}>Login</button>
                    </div>
                    <Link to='/register' className='reg'>Create New Account?</Link>
                </form>
            </div>

        </div>
    )
}
