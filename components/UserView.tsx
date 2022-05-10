import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserView() {
  const { user, setUser } = useContext(UserContext);
  return (
  <div>
      <h1>User View</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
      
    </div>)
}
