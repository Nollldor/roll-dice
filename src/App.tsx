import React, {useState} from 'react';
import './App.css';
import {D20} from "./component/D20";
import {getRandomInt} from "./common/utils";

function App() {
    const [rolledNum, setRolledNum] = useState<number | null>(null)

    const rollDice = () => {
        const newInterval = setInterval(() => {
            setRolledNum(getRandomInt(20))
        }, 100)
        setTimeout(() => {
            clearInterval(newInterval)
        }, 3000)
    }


    return (
        <div className="App">
            <D20 value={rolledNum}/>
            <div>
                <button onClick={rollDice}>roll</button>
            </div>
        </div>
    );
}

export default App;
