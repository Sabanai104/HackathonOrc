import React, { useState } from "react";
import api from "../services/api";


interface IUser {
  name: string;
  username: string;
  
}

const CreatePost=({username,userId}:{username:string ,userId:string})=>{
    const[writtenPost,setWrittenPost]= useState("");

    const createPost = async (_id: string) => {
        try {
          await api.post(`post/${_id}`, {
            posts: writtenPost,
            userId: userId
          });
          window.location.reload();
        } catch (error) {
          console.log(error.message);
        }
      };

return(
    <div className='postcontainer'>
            <p className='usernamecontainer'>{username}</p>
            <textarea className='postinput' placeholder='Escreva aqui...'  onChange ={e => { setWrittenPost(e.target.value) }}  ></textarea>
            <br></br>
            <button className='submitbutton' onClick = {()=>{createPost("60d162734cec31001a0f9696");window.location.reload() } }>POSTAR</button>
        </div>
);

}

export default CreatePost;