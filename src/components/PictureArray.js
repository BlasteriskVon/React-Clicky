import React from "react";

function PictureArray(props) {
    return (
        <div className="row">
        {props.pictures.map(image => (
            <div className="col-md-2">
                <img onClick={props.clickedImage} alt="pokemonPic" src={image.source} className="img-fluid" imageid={image.id} style={{width:"100%", height:"auto"}}/>
            </div>
        ))}
        </div>
    )
}

export default PictureArray;