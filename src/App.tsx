import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";

function App() {
    return (
        <div>
            <Character
                name={'Phoenixperson'}
                type={'Cyborg'}
                gender={'Male'}
                status={'Dead'}
                img={'https://rickandmortyapi.com/api/character/avatar/592.jpeg'}
            />
            <Character
                name={'Numbericon'}
                status={'unknown'}
                type={'Numbericon'}
                gender={'unknown'}
                img={'https://rickandmortyapi.com/api/character/avatar/253.jpeg'}
            />
            <hr/>
            <Users/>
        </div>
    );
}

export default App;
