import React from "react";

export const Title = ({name, type="h1", className= ""}) => {

const style = `text-center bold ${className}`;

    return (
        <>
            {type ==="h1" && <h1 className={style}>{name}</h1>}
            {type ==="h2" && <h2 className={style}>{name}</h2>}
            {type ==="h3" && <h3 className={style}>{name}</h3>}    
        </>   
    );
}