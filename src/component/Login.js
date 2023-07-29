import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostReq, fetchPostSucc, fetchPostFail } from '../redux/PostActionCreator';
import { useNavigate } from "react-router-dom";


const Login = () => {
    let [formData, setFormData] = useState({ name: "", password: "" });

    let x = useSelector((store) => console.log(store));
    let user_OBj = useSelector((store) => store.fetchPostData.data);
    let err = useSelector((store) => store.fetchPostData.err);
    let loading = useSelector((store) => store.fetchPostData.loading);


    let dispatch = useDispatch();
    let navigate = useNavigate()

    useEffect(() => {
        if (user_OBj) navigate('/profile');
    }, [user_OBj])


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchPostReq())
        axios.post("https://dummyjson.com/auth/login", {
            username: formData.name.trim(),
            password: formData.password.trim(),
        }).then((response) => { dispatch(fetchPostSucc(response.data)) })
            .catch((err) => { dispatch(fetchPostFail(err.response.data.message)) })
    }



    return (
        <div>
            {
                !loading ? (
                    <>
                        <div className='login'>

                            <div style={{ color: "grey", fontSize: "15px" }}>Welcome back! 👋</div>
                            <h1>Sign in to your account</h1>
                            <form onSubmit={handleSubmit}>
                                {/* <div>atuny0     9uQFF1Lh</div> */}
                                <div>Your name</div>
                                <input type='name' autoFocus onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                <div>Password</div>
                                <input type='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                <button type='submit'>Continue</button>
                                <div style={{ textAlign: "center" }}><a href='/forgot'>Forget your password?</a></div>
                            </form>
                            {(<div className='error'>{err}</div>)}

                        </div>
                        <div className='dont-have-acc'>Don’t have an account? <a href="/">Sign up</a> </div>
                    </>
                ) :
                    (<div className='parent'><div className='loader'></div></div>)
            }
        </div>

    )
    // 
}

export default Login




//     < div className = 'login' >

//     {
//         loading?(
//     <>
//         <div style={{ color: "grey", fontSize: "15px" }}>Welcome back! 👋</div>
//         <h1>Sign in to your account</h1>
//         <form onSubmit={handleSubmit}>
//             <div>atuny0     9uQFF1Lh</div>
//             <div>Your name</div>
//             <input type='name' autoFocus onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//             <div>Password</div>
//             <input type='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//             <button type='submit'>Continue</button>
//             <div style={{ textAlign: "center" }}><a href='/'>Forget your password?</a></div>
//         </form>
// { (<div className='error'>{err}</div>) }
//     </>
// ) : (<div className='parent'><div className='loader'></div></div>)}

// </div >