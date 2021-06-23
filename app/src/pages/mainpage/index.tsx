import { useEffect, useState } from "react";
import CreatePost from "../../components/createPost";
import PostContainer from "../../components/postContainer";
import api from "../../services/api";
import "./index.css"

interface IUser {
    name: string;
    username: string;
    
}


function MainPage() {

    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);
    
    const getUser = async () => {
        try {
            const _user = await api.get("user/all");
            setUser(_user.data.response);
        } catch (error) {
            console.log(error.message)
        }
    };
    const getPost = async () => {
        try {
            const _post = await api.get("post/all");
            setPost(_post.data.response);
        } catch (error) {
            console.log(error.message)
        }
    };
   
    useEffect(()=>{
        getUser();
        getPost()
    },[]);
    return (
        <div className='page'>

            <section className='sidebar' >

                <p className='namepos'>Denniel</p>
                <p className='namepos1'>William</p>
                <div className='username'><span>DENIZINHODAQUEBRADA</span></div>

                <div className='iconlocation'>
                    <a className='links' href=''><img className='icon' src='homeicon4.png' alt='icon'></img>Home</a>
                    <a className='links1' href=''><img className='icon1' src='usericon.png' alt='icon'></img>Sair</a>
                </div>

            </section>

                <CreatePost userId = "60d1f0d947b8d2001a9217ce" username= "Carlos" ></CreatePost>
                
                {post?.map(({posts,userId}:{posts:string, userId:IUser})=>{
                   return(<PostContainer myposts={posts} username={userId?.username}></PostContainer>);
                    
                })}
        </div>
    )

}

export default MainPage;