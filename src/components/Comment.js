import React from 'react';

function Comment(props) {
    if(props.state === 'default') {
        return (
            <p>Чего сидишь? Порадуй котэ, <span className="card-comment__buy-btn" onClick={props.buyBtn}>купи.</span></p>
        )
    } else {
        return (
        <p className={`card-comment_${props.state}`}>{props.comment}</p>
        )
    }
};

export default Comment;