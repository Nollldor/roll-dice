import React, {useState} from 'react';
import './App.css';
import {D20} from "./component/D20/D20";
import {Button, ButtonGroup, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {addDice, removeDice, setDicesValues, setRollingMode, StateType} from "./store/reducer";

function App() {
    const dices = useSelector<AppRootStateType, StateType>(state => state.dices)
    const dispatch = useDispatch()

    const rollDice = () => {
        dispatch(setRollingMode(true))
        const newInterval = setInterval(() => {

            dispatch(setDicesValues())
        }, 100)
        setTimeout(() => {
            clearInterval(newInterval)
            dispatch(setRollingMode(false))
        }, 3000)
    }

    const addDiceOnClickHandler = () => {
        dispatch(addDice())
    }

    const removeDiceOnClickHandler = () => {
        dispatch(removeDice())
    }


    return (
        <div className="App">
            <div className={'controlButtons'}>
                <Container maxWidth='sm'>
                    <ButtonGroup size='medium' fullWidth={true} variant='contained'
                                 aria-label="outlined primary button group">
                        <Button disabled={dices.dicesValues.length < 1 || dices.rollingMode}
                                onClick={rollDice}>roll</Button>
                        <Button disabled={dices.rollingMode} onClick={addDiceOnClickHandler}>+dice</Button>
                        <Button disabled={dices.dicesValues.length < 1 || dices.rollingMode}
                                onClick={removeDiceOnClickHandler}>-dice</Button>
                    </ButtonGroup>
                </Container>
            </div>
            <div className={'sumBlock'}>
                <Typography variant={"h6"}>
                    Sum of dices: {!dices.rollingMode && dices.sum}
                </Typography>
            </div>

            <div className={"dicesBlock"}>
                {dices.dicesValues.map((num, index) => (
                    <D20 key={index} value={num}/>
                ))}
            </div>
        </div>
    );
}

export default App;
