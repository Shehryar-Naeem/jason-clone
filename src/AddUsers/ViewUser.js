import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
const ViewUser=()=>{
    const [user,setUser]=useState({
        name:"",
        lname:"",
        email:"",
        password:"",
    })
    const {id}=useParams()
    useEffect(()=>{
        loadUser()
    },[])
    const loadUser=async ()=>{
        const result =await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data )
    }
    return (
        <>
            <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                Go back to home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr/>
            <ul className="list-group w-50"> 
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">LName: {user.lname}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Password: {user.password}</li>
            </ul>
            </div>
        </>
    )
}
export default ViewUser;