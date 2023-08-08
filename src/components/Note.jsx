import React from "react";

function Note(props) {
    return <div className="Note" style={{height: props.height, background: props.background, marginTop: props.marginTop}}>

    </div>;
}

export default Note;