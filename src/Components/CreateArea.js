import React, {useState} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom'
export const CreateArea = (props) => {
    const [isExpanded,setIsExpanded] = useState(false);
    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setNote((prevNote)=>{
            // console.log(prevNote);
            return{
               ...prevNote,
               [name]: value,
            }
        })
    }
    function expand() {
        setIsExpanded(true);
    }
    function handleSubmit(event){
        props.onAdd(note);
        setNote({
            title:'',
            content:'',
        })
    }
    // console.log(isExpanded);
    // console.log(note);
    return (
        <div>
            <form className='create-note'>
                {isExpanded && <input name='title' placeholder='Title' value={note.title} onChange={handleChange}/>}
                <textarea name='content' placeholder='Take a note...' rows={3} value={note.content} onClick={expand} onChange={handleChange}/>
                <Zoom in={isExpanded}>
                <Fab onClick={handleSubmit}>
                <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    )
}
