import React from 'react';

function ButtonLink(props){
    //props =>
    return(
        <a href={props.href} className={props.className}>
            Novo video
        </a>
    );
}

export default ButtonLink;