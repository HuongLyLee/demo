import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../Home/Home";

function UserPage() {
  const { id } = useParams()
  console.log(id);
  const [user, setUser] = useState(null)
  useEffect(() => {
    (async ()=>{
      const u = await userService.getUser(id)
      setUser(u)
    })()
  }, [id])

  if (!user)
    return null

  return (
    <div>
      Hello <span style={{color: "rgb(34 211 238)"}}>{user.name}</span>
    </div>
  )
}

export default UserPage;

