import React from "react";
import notes from "./notes";

const EachNote = (props) => {
    return (
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

const CreateNote = (item) => {
    return(
        <EachNote 
            title={item.title}
            content={item.content}
        />
    )
}
const Note = () => {
    return (
        notes.map(item => CreateNote(item))
    )
}

export default Note