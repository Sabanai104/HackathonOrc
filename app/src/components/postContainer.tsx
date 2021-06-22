import React from "react"
import { FaRegHeart } from "react-icons/fa";


const PostBox = ({username,myposts}:{
    myposts: string,
    username: string
} ) => {


    return (
        <div className='postcontainer'>
            <p className='usernamecontainer'>{username}</p>
            <p className= "postinput"> {myposts}</p>
            <br></br>
            <FaRegHeart className="heartbutton"/>
        </div>
    );
} 
export default PostBox;