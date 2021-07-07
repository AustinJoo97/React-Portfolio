// import { useState } from 'react';
import Projects from './projects';
import Contacts from './contacts';
import AboutMe from './aboutMe';

export default function MainContent({ pathChosen }) {
    const choosePath = (pathChosen) => {
        switch(pathChosen){
            case 'projectsButton': 
                return (<Projects />)
            case 'contactMeButton': 
                return (<Contacts />)
            default:
                return (<AboutMe />)
        }
    }
    
    return(
        <div>
            {choosePath(pathChosen)}
        </div>
    )
}