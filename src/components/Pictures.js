import React, { Component } from "react";
import PictureArray from "./PictureArray";

class Pictures extends Component {
    state = {
        pictures: [],
        selectedPictures: [],
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        let picArray = []
        for(var i = 1;i <= 9;i++){
            picArray.push({
                id: i,
                source: "/images/" + i + ".jpg"
            });
        }; 
        this.setState({
            pictures: picArray
        })
    }

    shufflePictures(array) {
        var j, x, i;
        for(i = array.length-1;i > 0;i--){
            j = Math.floor(Math.random() * (i+1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    clickedImage = image => {
        const imageid = image.target.attributes.getNamedItem("imageid").value;
        if(!this.state.selectedPictures.includes(imageid)){
            let newSelectedPictures = this.state.selectedPictures.concat([imageid]);
            let newScore = this.state.score + 1;
            this.setState({
                pictures: this.shufflePictures(this.state.pictures),
                selectedPictures: newSelectedPictures,
                score: newScore,
                topScore: Math.max(this.state.topScore, newScore)
            });
        } else {
            this.setState({
                pictures: this.shufflePictures(this.state.pictures),
                selectedPictures: [],
                score: 0
            });
        }
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <p className="navbar-text">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                </nav>
                <PictureArray 
                pictures={this.state.pictures} 
                clickedImage={this.clickedImage}
                />

            </div>
        )
    }
}

export default Pictures;