import "./index.css"

function MainPage(){
    return(
    <div className='page'>
        
        <section className='sidebar' >

            <p className='namepos'>Denniel <br></br> William</p>
            <div className='username'><span>DENIZINHODAQUEBRADA</span></div>

            <div className='iconlocation'>
            <a className='links' href=''><img className='icon' src='usericon.png' alt='icon'></img>Home</a>
            <a className='links' href=''><img className='icon' src='homeicon4.png' alt='icon'></img>Perfil</a>
            </div>

        </section>

        <div className='postcontainer'>
            <p className='usernamecontainer'>DENIZINHODAQUEBRADA</p>
            <textarea className='postinput' placeholder='Escreva aqui...' ></textarea>
            <br></br>
            <button className='submitbutton'>POSTAR</button>
        </div>
    </div>
    )

}

export default MainPage;