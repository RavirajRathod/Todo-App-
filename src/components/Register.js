import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    document.body.style.background = '#373737';
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        userName: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const inputChangehandler = (e) => {
        setRegisterData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const [userTouch, setUserTouch] = useState(false);
    const [emailTouch, setEmailTouch] = useState(false);
    const [passTouch, setPassTouch] = useState(false);
    const [cpassTouch, setCpassTouch] = useState(false);

    const userValid = (userTouch == true) && (registerData.userName !== "");
    const emailValid = (emailTouch == true) && (registerData.email !== "");
    const passValid = (passTouch == true) && (registerData.password !== "") && ((registerData.password).length >= 6);
    const cpassValid = (cpassTouch == true) && (registerData.cpassword !== "") && (registerData.password === registerData.cpassword);

    const userInvalid = (userTouch == true) && (registerData.userName === "");
    const emailInvalid = (emailTouch == true) && (registerData.email === "");
    const passInvalid = (passTouch == true) && ((registerData.password).length < 6);
    const cpassInvalid = (cpassTouch == true) && (registerData.password !== registerData.cpassword);

    const handleBluruser = () => {
        setUserTouch(true);
    }
    const handleBluremail = () => {
        setEmailTouch(true);
    }
    const handleBlurpass = () => {
        setPassTouch(true);
    }
    const handleBlurcpass = () => {
        setCpassTouch(true);
    }


    const validation = {
        required: {
            userName: "Username is required.",
            email: "Email is Required.",

        },
        invalid: {
            password: "Password must contain 6 or more letters.",
            cpassword: "Confirm password must be same as password."
        }

    }

    const register = () => {

        localStorage.setItem("Registerdata", JSON.stringify(registerData))
        localStorage.setItem("loginData", JSON.stringify(registerData))
        navigate('/');
    }

    return (
        <div className='container register'>
            <div className='text-white'>
                <div className='reg_title'>
                    <h2 className='fw-bold'>Register</h2>
                    <p>Let's Create new account</p>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" value={registerData.userName} name='userName' onChange={inputChangehandler} onBlur={handleBluruser} />
                        {(userInvalid) && <p id='user'>{validation.required.userName}</p>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" value={registerData.email} name='email' onChange={inputChangehandler} onBlur={handleBluremail} />
                        {(emailInvalid) && <p id='email'>{validation.required.email}</p>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" value={registerData.password} name='password' onChange={inputChangehandler} onBlur={handleBlurpass} />
                        {(passInvalid) && <p id='pass'>{validation.invalid.password}</p>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" value={registerData.cpassword} name='cpassword' onChange={inputChangehandler} onBlur={handleBlurcpass} />
                        {(cpassInvalid) && <p id='cpass'>{validation.invalid.cpassword}</p>}
                    </div>
                    <div className='reg_btn'>

                        <button type="submit" onClick={register} class={`btn btn-danger rbtn ${(userValid && emailValid && passValid && cpassValid) ? '' : 'disabled'}`} id='submit' >Register</button>
                    </div>
                    <p className='my-3'><Link to='/login' className='reg'>Login to existing account?</Link></p>

                </form>
            </div >

        </div >
    )
}
