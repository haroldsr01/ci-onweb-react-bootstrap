import React from 'react'
import TicTacToe from '../img/tic-tac-toe.png'
import Logistics from '../img/logistics.jpg'
import Inventory from '../img/inventory.png'

export const PreviewCards = () => {
    const cardsData = [
        {
            cardId: 0,
            image: TicTacToe,
            title: "Tic-Tac-Toe",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            cardId: 1,
            image: Inventory,
            title: "Inventory",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            cardId: 2,
            image: Logistics,
            title: "Logistics",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            cardId: 3,
            image: TicTacToe,
            title: "Farm2Market",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            cardId: 4,
            image: Inventory,
            title: "JustINTime",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            cardId: 5,
            image: Logistics,
            title: "Notes",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]

    const cardsElements = cardsData.map(card => (        
        <div key={card.cardId} className="col card border-primary" style={{width: "18rem", }}>
            <img src={card.image} className="card-img-top img-thumbnail" alt="..." style={{width: "100%", height: "20vw", objectFit: "cover"}}/>
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="#" className="btn btn-primary">Launch</a>
            </div>
            <div class="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>                    
    ))

    return (
        <React.Fragment>
            <div className="container-fluid bg-danger">
            <div className="container text-center card-group mt-3 bg-secondary">
                <div className="row row-cols-4 d-flex justify-content-evenly gap-1">
                    {cardsElements}
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}