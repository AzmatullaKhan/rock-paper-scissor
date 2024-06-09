import './allPages.css'

export const Home=()=>{  

    return(
        <div className="home_main_container">

            <img className='cat_gif_holder_left' id='cat1' src={require('../gifs/cat1-scissor.gif')} alt='cat-gif'/>
            <img className='cat_gif_holder_right' id='cat2' src={require('../gifs/cat2-rock.gif')} alt='cat-gif'/>

            <img className='cat_image_holder_left' src={require('../images/cat1-scissors.png')} alt='cat-gif'/>
            <img className='cat_image_holder_right' src={require('../images/cat2-rock.png')} alt='cat-gif'/>
        </div>
    )
}