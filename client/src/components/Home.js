import React  from "react"

const image= "https://www.ancient-origins.net/sites/default/files/field/image/One-of-the-Greek-temples.jpg"
    
function Home(){
    return(
        <div>
            <h1 className="homeHeader">Welcome to the Pantheon!</h1>
            <img className="photo" src={image} />
        </div>
    )
}

export default Home; 