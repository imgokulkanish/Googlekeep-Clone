import React from 'react'
import { Delete } from '@material-ui/icons'

export const Note = (props) => {
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>
                <Delete/>
            </button>
        </div>
    )
}

