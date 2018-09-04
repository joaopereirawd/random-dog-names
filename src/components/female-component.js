import React, { Component } from 'react';
import jsonData from '../components/dogList.json';
import logo from '../img/female-logo.svg';


const jsonFemaleDogs = jsonData.FemaleDog;


class femaleDogComponent extends Component {
   
    constructor() {
        super();
        this.state = {
            name: this.getRandomName()
        };
    }


    getRandomName() {
        return jsonFemaleDogs[Math.floor(Math.random() * jsonFemaleDogs.length)];
    }


    render() {

        return (
            <div>
                <div className="dc-image">
                    <img src={logo} />
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


export default femaleDogComponent;