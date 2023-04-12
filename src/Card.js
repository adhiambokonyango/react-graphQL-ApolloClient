import React from 'react';

const Card = ({character}) => {
    return (
        <div className="card w-25">
            <img src={character.image} className="card-img-top" alt="character"/>
            <div className="card-body">
                <h5>{character.name}</h5>
                <p>{character.status}</p>
                <p>{character.type}</p>
            </div>
        </div>
    );
};

export default Card;