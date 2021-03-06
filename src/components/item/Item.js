
import { useState } from 'react';
import "./Item.css";

const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true);
    return (
        <div className="card" onClick={() => setShowLogo(!showLogo)}>
            {showLogo ? (
            <div>
                <img className="card-logo" src={card.img} alt="" />
                <h3>{card.name}</h3>
            </div>
            ) : (
                <ul className='list'>
                    {
                        card.options.map((element, index) => {
                            return <li key={index}>{element}
                            </li>;                      
                        })
                    }
                </ul>
            )}
        </div>
    )
}

export default Item;