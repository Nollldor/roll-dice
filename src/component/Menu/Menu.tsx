import React, {FC} from "react";
import {Button, ButtonGroup, Container} from "@mui/material";
import styles from './Menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addDice, removeDice, setDicesValues, setRollingMode, StateType} from "../../store/reducer";

type PropsType = {

}

export const Menu: FC<PropsType> = ({}) => {

    const dices = useSelector<AppRootStateType, StateType>(state => state.dices)
    const dispatch = useDispatch()

    const rollDiceOnClickHandler = () => {
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

    return <div className={styles.controlButtons}>
        <Container maxWidth='sm'>
            <ButtonGroup size='medium' fullWidth={true} variant='contained'
                         aria-label="outlined primary button group">
                <Button disabled={dices.dicesValues.length < 1 || dices.rollingMode}
                        onClick={rollDiceOnClickHandler}>roll</Button>
                <Button disabled={dices.rollingMode} onClick={addDiceOnClickHandler}>+dice</Button>
                <Button disabled={dices.dicesValues.length < 1 || dices.rollingMode}
                        onClick={removeDiceOnClickHandler}>-dice</Button>
            </ButtonGroup>
        </Container>
    </div>
}