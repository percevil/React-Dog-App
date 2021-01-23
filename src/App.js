

import React, {Component} from "react"
import "./App.css"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            dogPic: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://dog.ceo/api/breeds/image/random")
        //"https://dog.ceo/api/breeds/image/random"
        // "https://dog.ceo/api/breeds/list/all"
            .then(response => response.json())
            .then(data => {
                console.log(data)
               
                this.setState({
                    loading: false,
                    dogPic: data,   
                })
            }) 
            this.buttonClick = this.buttonClick.bind(this)
    }


    buttonClick() {
        this.setState({
         
        })
          
        
    }

   render() {

     const displayPic = this.state.loading ? "Loading..." : this.state.dogPic.message
       
        return (
            <div className="picContainer" >
                 <img className="picture"src={displayPic} alt="cute puppies"></img>
                 <button onClick="this.buttonClick" 
                 className="button">Click for a New Dog</button>
            </div>
        )
    }
}

export default App

