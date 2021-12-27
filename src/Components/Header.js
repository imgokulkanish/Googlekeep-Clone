import React, {useState} from 'react'
import HighlightIcon from '@material-ui/icons/Highlight';
export const Header = () => {
    const[isExpanded,setIsExpanded] = useState(false);
    let expanded = false;
    function expand() {
        expanded = true;
        isExpanded = true;
    }
    console.log(isExpanded,setIsExpanded);
    return (
        <header>
            <h1>
            <HighlightIcon/>
                Keeper</h1>
        </header>
    )
}
