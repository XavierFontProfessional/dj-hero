import React, { useState, useEffect } from "react";
import Note from "./Note";
import notes from "./notes";

function Pista() {
    const [marginTopUnit, setMarginTopUnit] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMarginTopUnit(prevMargin => prevMargin + 1);
        }, 1000);

        return () => clearInterval(interval);  // Clear the interval when the component is unmounted.
    }, []);

    return (
        notes.map(note => (
            <Note
                key={note.key}
                marginTop={`${marginTopUnit + (note.marginTop || 0)}em`}
                height={note.height}
                background={note.background}
            />
        ))
    );
}

export default Pista;
