import React from "react";
import './Alert.css';

function Alert(props) {
    return (
        <div>
            <div className={"alert " + (props.show ? 'alert-show ' : '') + props.type}>
                {props.children}
                {(props.dismiss) ? <button type="button" className="alert-close">
                    <span onClick={() => props.dismiss()}>X</span>
                </button> : null }
            </div>
        </div>
    )
}

export default Alert;