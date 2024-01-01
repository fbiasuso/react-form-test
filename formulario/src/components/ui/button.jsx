import React from "react";

export const Button = ({name, onclick=null, type = null,className = null}) => {

    return (
            <button type={type} className={className} onClick={onclick}>
                {name}
            </button>
    );
}