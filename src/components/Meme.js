import React from "react";

export default function Meme(){

    const [meme, setMeme]= React.useState({
        topText:"",
        bottomText:"",
        randomImg:"https://i.imgflip.com/1g8my4.jpg",
    })

    const [allMemesImages, setAllMemesImages]= React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemesImages(data.data.memes))
    },[])


    function getMemeImage(){
        const random = Math.floor(Math.random() * allMemesImages.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg:allMemesImages[random].url,
        }))
    }

    function changeInput(event){
        const {name,value} = event.target;
        setMeme(prevMeme =>({...prevMeme, [name]:value}))
    }
    
    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    id="top_text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={changeInput}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    id="bottom_text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={changeInput}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image💫</button>
            </div>
            <div className="meme">
            <img src={meme.randomImg} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}