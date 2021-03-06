import React from 'react';
import LikeHoverRow from "./like_hover_row";

const LikeHover = (props) => {
    if(!props.likes.length){
        return null 
    }
    const userArr = props.likes.map(like => {
        return <LikeHoverRow  key={like.id} likerId={like.user_id}/>
    })

    return (
        <ul className="like-hover-list">
            {userArr}
        </ul>
    )
}

export default LikeHover;