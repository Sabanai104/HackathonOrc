import { useEffect, useState } from "react";
import CreatePost from "../../components/createPost";
import PostContainer from "../../components/postContainer";
import api from "../../services/api";
import "./index.css"




function MainPage() {

    const [user, setUser] = useState([]);
    
    const getUser = async () => {
        try {
            const _user = await api.get("user/all");
            setUser(_user.data.response);
        } catch (error) {
            console.log(error.message)
        }
    };
    useEffect(()=>{
        getUser();
    },[]);
    return (
        <div className='page'>

            <section className='sidebar' >

                <p className='namepos'>Denniel <br></br> William</p>
                <div className='username'><span>DENIZINHODAQUEBRADA</span></div>

                <div className='iconlocation'>
                <button onClick = {()=> {console.log(user)}}></button>
                    <a className='links' href=''><img className='icon' src='usericon.png' alt='icon'></img>Home</a>
                    <a className='links' href=''><img className='icon' src='homeicon4.png' alt='icon'></img>Perfil</a>
                </div>

            </section>

                <CreatePost name = "Roberto" username= "Carlos" ></CreatePost>
                {user?.map(({username,myposts})=>{
                    return(<PostContainer username= {username}  myposts = {myposts}></PostContainer>)
                })}
        </div>
    )

}

export default MainPage;