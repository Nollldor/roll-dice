import React, {useState} from 'react';
import './App.css';
import {D20} from "./component/D20/D20";
import {Button, ButtonGroup, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {StateType} from "./store/reducer";
import {Menu} from "./component/Menu/Menu";
import {SumBlock} from "./component/SumBlock/SumBlock";
import {DicesBlock} from "./component/DicesBlock/DicesBlock";

function App() {
    const dices = useSelector<AppRootStateType, StateType>(state => state.dices)

    return (
        <div className="App">
            <Menu/>
            <SumBlock rollingMode={dices.rollingMode} sum={dices.sum}/>
            <DicesBlock/>
        </div>
    );
}

export default App;
