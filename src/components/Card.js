import { useState } from "react";

function Card( {id, name,info , image, price} , removetour ) {

    const[readmore, setReadmore] = useState[false];

    const discription = `${info.substring(0,200)}....`;

    function readmoreHandler (){
        setReadmore(!readmore);
    }


    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h3 className="tour-name">{name}</h3>
                </div>
                <div className="discription">
                    {discription}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="button" onClick={() => removetour(id)}>
                Not intrested
            </button>
        </div>
    );
}

export default Card;