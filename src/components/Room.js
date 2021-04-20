import defaultImage from "../images/room-1.jpeg";

import React from 'react'
import {Link} from 'react-router-dom'
export default function Room({price,id,name,images,slug}) {

    return <article className="room">
            <div className="img-container">
                <img src={images[0]||defaultImage} alt={name}/>

            </div>
            </article>
}
