import React from "react"

interface IUser {
    name: string;
    username: string;
    
}

const PostBox = ({username,myposts}:{
    myposts: string,
    username: IUser
} ) => {


    return (
        <div className='postcontainer'>
            <p className='usernamecontainer'>{username}</p>
            <h2> {myposts}</h2>
            <br></br>
            <button className='submitbutton' >POSTAR</button>
        </div>
    );
} 
export default PostBox;