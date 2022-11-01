import React, {useState} from 'react';
import './App.css';
import {D20} from "./component/D20/D20";
import {getRandomArrayOfInts, sumOfArray} from "./common/utils";
import {Button, ButtonGroup, Container, Typography} from "@mui/material";

function App() {
    const [rolledNums, setRolledNums] = useState<Array<number | null>>([null])
    const [rollingMode, setRollingMode] = useState(false)
    const [sum,setSum] = useState(0)
    const rollDice = () => {
        setRollingMode(true)
        const newInterval = setInterval(() => {
            setRolledNums(getRandomArrayOfInts(20, rolledNums.length))
            setSum(sumOfArray(rolledNums))
        }, 100)
        setTimeout(() => {
            clearInterval(newInterval)
            setRollingMode(false)
        }, 3000)
    }

    const addDice = () => {
        setRolledNums([...rolledNums, null])
        setSum(0)
    }

    const removeDice = () => {
        const copyRolledNums = [...rolledNums]
        copyRolledNums.pop()
        setRolledNums(copyRolledNums)
        setSum(0)
    }

    return (
        <div className="App">
            <div className={'controlButtons'}>
                <Container maxWidth='sm'>
                    <ButtonGroup size='medium' fullWidth={true} variant='contained'
                                 aria-label="outlined primary button group">
                        <Button disabled={rolledNums.length < 1 || rollingMode} onClick={rollDice}>roll</Button>
                        <Button disabled={rollingMode} onClick={addDice}>+dice</Button>
                        <Button disabled={rolledNums.length < 1 || rollingMode} onClick={removeDice}>-dice</Button>
                    </ButtonGroup>
                </Container>
            </div>
            <div className={'sumBlock'}>
                <Typography variant={"h6"}>
                    Sum of dices: {!rollingMode && sum}
                </Typography>
            </div>

            <div className={"dicesBlock"}>
                {rolledNums.map((num, index) => (
                    <D20 key={index} value={num}/>
                ))}
            </div>


        </div>
    );
}

export default App;
