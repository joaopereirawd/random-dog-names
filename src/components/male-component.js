import React, { Component } from 'react';
import jsonData from '../components/dogList.json';
import logo from '../img/male-logo.svg';


const jsonMaleDogs = jsonData.MaleDog;
//const jsonFemaleDogs = jsonData.FemaleDogs;



class maleDogComponent extends Component {
   
    constructor() {
        super();
        this.state = {
            name: this.getRandomName()
        };
    }


    getRandomName() {
        return jsonMaleDogs[Math.floor(Math.random() * jsonMaleDogs.length)];
    }


    render() {
        
        return (
            <div>
                <div className="dc-image">
                    <img src={logo}/>
                </div>
                <div id="display_dog_name">{this.getRandomName()}</div>
                <button className="randomize-btn" onClick={() => { 
                    document.getElementById('display_dog_name').innerHTML = this.getRandomName();
                }}>
                Get random
                </button>

                
            </div>
        );
    }
}


export default maleDogComponent;