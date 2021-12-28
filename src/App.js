import React, {useState} from 'react'
import { Header } from './Components/Header'
import { CreateArea } from './Components/CreateArea'
import { Note } from './Components/Note'
import "./App.css"
import Footer from './Components/Footer'
const App = () => {
  const [notes,setNotes]=useState([]);
  function addNote(newNote){
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote]
    });
  }
  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!== id;//whatever not equal gets stored in array
      })
    })
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
            <Note key={index} title={noteItem.title} content={noteItem.content} id={index}  onDelete={deleteNote} />
          )
        })
      }
      <Footer/>
    </div>
  )
}

export default App;
