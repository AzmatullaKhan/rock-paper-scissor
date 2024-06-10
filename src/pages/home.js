import './allPages.css'

export const Home=()=>{  

    let firstClick=true

    window.addEventListener('keydown', (e)=>{
        if(e.key==='Enter')
            window.location.reload()
    })

    const generateComputerGif=(number)=>{

        let gif_container=document.createElement('img')
        gif_container.className='cat_gif_holder_right'
        gif_container.alt='gif'
        gif_container.id='com_gif'
        
        if(number===1)
            gif_container.src=require('../gifs/cat2-paper.gif')        
        if(number===2)
            gif_container.src=require('../gifs/cat2-rock.gif')        
        if(number===3)
            gif_container.src=require('../gifs/cat2-scissor.gif')        

        return gif_container;

    }

    const generateComputerImage=(number)=>{

        let image_container=document.createElement('img')
        image_container.className='cat_image_holder_right'
        image_container.alt='gif'
        image_container.id='com_img'
        
        if(number===1)
            image_container.src=require('../images/cat2-paper.png')        
        if(number===2)
            image_container.src=require('../images/cat2-rock.png')        
        if(number===3)
            image_container.src=require('../images/cat2-scissor.png')        

        return image_container;

    }

    const handleRockClick=()=>{

        let random_number=(Math.floor((Math.random() * 3) + 1))

        let main_container=document.getElementById('home_main_container')
        if(!firstClick){
            main_container.removeAttribute(document.getElementById('gif'))
            main_container.removeAttribute(document.getElementById('image'))
            main_container.removeAttribute(document.getElementById('com_gif'))
            main_container.removeAttribute(document.getElementById('com_img'))
        }
        else{
            firstClick=false
        }

        let gif_container=document.createElement('img')
        gif_container.src=require('../gifs/cat1-rock.gif')
        gif_container.className='cat_gif_holder_left'
        gif_container.alt='gif'
        gif_container.id='gif'

        let hidden_image=document.createElement('img')
        hidden_image.src=require('../images/cat1-rock.png')
        hidden_image.className='cat_image_holder_left'
        hidden_image.id='image'

        let com_gif=generateComputerGif(random_number)
        let com_image=generateComputerImage(random_number)

        main_container.appendChild(gif_container)
        main_container.appendChild(hidden_image)
        main_container.appendChild(com_gif)
        main_container.appendChild(com_image)
    }
    
    const handlePaperClick=()=>{

        let random_number=(Math.floor((Math.random() * 3) + 1))

        let main_container=document.getElementById('home_main_container')
        if(!firstClick){
            main_container.removeAttribute(document.getElementById('gif'))
            main_container.removeAttribute(document.getElementById('image'))
            main_container.removeAttribute(document.getElementById('com_gif'))
            main_container.removeAttribute(document.getElementById('com_img'))
        }
        else{
            firstClick=false
        }

        let gif_container=document.createElement('img')
        gif_container.src=require('../gifs/cat1-paper.gif')
        gif_container.className='cat_gif_holder_left'
        gif_container.alt='gif'
        gif_container.id='gif'


        let hidden_image=document.createElement('img')
        hidden_image.src=require('../images/cat1-paper.png')
        hidden_image.className='cat_image_holder_left'
        hidden_image.id='image'
        hidden_image.alt='image'

        let com_gif=generateComputerGif(random_number)
        let com_image=generateComputerImage(random_number)

        main_container.appendChild(gif_container)
        main_container.appendChild(hidden_image)
        main_container.appendChild(com_gif)
        main_container.appendChild(com_image)

    }
    
    const handleScissorClick=()=>{

        let random_number=(Math.floor((Math.random() * 3) + 1))
        
        let main_container=document.getElementById('home_main_container')
        if(!firstClick){
            main_container.removeAttribute(document.getElementById('gif'))
            main_container.removeAttribute(document.getElementById('image'))
            main_container.removeAttribute(document.getElementById('com_gif'))
            main_container.removeAttribute(document.getElementById('com_img'))
        }
        else{
            firstClick=false
        }
        
        let gif_container=document.createElement('img')
        gif_container.src=require('../gifs/cat1-scissor.gif')
        gif_container.className='cat_gif_holder_left'
        gif_container.alt='gif'
        gif_container.id='gif'


        let hidden_image=document.createElement('img')
        hidden_image.src=require('../images/cat1-scissors.png')
        hidden_image.className='cat_image_holder_left'
        hidden_image.id='image'
        hidden_image.alt='image'

        let com_gif=generateComputerGif(random_number)
        let com_image=generateComputerImage(random_number)

        main_container.appendChild(gif_container)
        main_container.appendChild(hidden_image)
        main_container.appendChild(com_gif)
        main_container.appendChild(com_image)
    }

    return(
        <div className="home_main_container" id='home_main_container'>

            <button onClick={handleRockClick}>Rock</button>
            <button onClick={handlePaperClick}>Paper</button>
            <button onClick={handleScissorClick}>scissor</button>

        </div>
    )
}