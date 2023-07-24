import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService/UserService";
export const userService = new UserService()

function Home(){
  const [users,setUsers] = useState([])

  useEffect(()=>{
    userService.getAllUsers().then(data=>{
      setUsers(data)
    })
  },[])

  return (
    <div> 
    {
      users.map((user) => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      )
    })}
    </div>
  )
}

export default Home;

