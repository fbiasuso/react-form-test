import React from "react";

export const Form = ({children,onsubmit= null, className = ""}) => {

const style = `d-flex flex-column justify-content-center w-75 ${className}`

    return (
            <form  className={style} onSubmit={onsubmit}>
                {children}
            </form>
    );
}