// needed components
import React, {Component} from 'react'

// styles import
import  '../../styles/landing.scss'

class Landing extends Component {
    render (){
        return(
            <div className='main'>
                <div>
                    <h1>Web Designer for Hire. 
                    <img className="imgFloatRight" src="https://via.placeholder.com/500x500?text=Picture+Selction+Needed" alt="Web Designer Photo"/>
                    </h1>
                </div>
            </div>
        )  // End Return
    } // End Render
}

export default Landing