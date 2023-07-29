import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchprofileReq, fetchprofileSucc, fetchProfileFail } from '../redux/ProfileActionCreatoe';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let x = useSelector((store) => console.log("store", store));
    let profileData = useSelector((store) => store.profileData.data)

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let id = useSelector((store) => {
        if (store.fetchPostData.data) {
            return store.fetchPostData.data.id;
        }
    })
    useEffect(() => {
        if (id) {
            dispatch(fetchprofileReq());
            axios.get(`https://dummyjson.com/users/${id}`)
                .then((res) => {
                    dispatch(fetchprofileSucc(res.data));
                }).catch((err) => {
                    console.log(err);
                    dispatch(fetchProfileFail(err.message))
                })
        } else {
            console.log("tou are not login");
            // navigate('/');
        }
    }, [id])

    return (
        <div className='profile-cont'>
            {
                profileData ? (
                    <div className='profile'>
                        <h1 >Profile</h1>
                        <img src={profileData.image} alt="userimage" />
                        <div><strong>Full Name: </strong>{profileData.firstName + " " + profileData.lastName}</div>
                        <div><strong>Age: </strong>{profileData.age}</div>
                        <div><strong>gender: </strong>{profileData.gender}</div>
                        <div><strong>Email: </strong>{profileData.email}</div>
                        <div><strong>Phone: </strong>{profileData.phone}</div><br></br>
                        <div><strong>Company Name: </strong>{profileData.company.name}</div>
                        <div><strong>Post: </strong>{profileData.company.title}</div>
                        <div><strong>Department: </strong>{profileData.company.department}</div>
                        <div><strong>University: </strong>{profileData.university}</div>
                    </div>
                ) :
                    (
                        <div>
                            <h1 >You are not Log in</h1>
                            <button onClick={() => navigate("/")}>Go Back</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Profile