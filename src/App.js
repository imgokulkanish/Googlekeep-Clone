import React, {useState} from 'react'
import { Header } from './Components/Header'
import { CreateArea } from './Components/CreateArea'
import { Note } from './Components/Note'
const App = () => {
  const [notes,setNotes]=useState([]);
  function addNote(newNote){
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote]
    });
  }
  console.log(notes)
  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map((noteItem,index)=>{
          console.log(noteItem);
          return (
            <Note title={noteItem.title} content={noteItem.content} />
          )
        })
      }
    </div>
  )
}

export default App;
