import React, {FC} from "react";
import {
    Button,
    ButtonGroup,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";
import styles from './Menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addDice, removeDice, setDicesValues, setMaxDiceValue, setRollingMode, StateType} from "../../store/reducer";

type PropsType = {}

export const Menu: FC<PropsType> = ({}) => {

    const dices = useSelector<AppRootStateType, StateType>(state => state.dices)
    const dispatch = useDispatch()

    const SelectDiceHandler = (e: SelectChangeEvent) => {
        dispatch(setMaxDiceValue(+e.target.value))
    }

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
            <FormControl fullWidth className={styles.selectDice}>
                <InputLabel id="select-dice-label">Select dice</InputLabel>
                <Select
                    labelId="select-dice-label"
                    id="select-dice"
                    value={dices.maxDiceValue.toString()}
                    label="Select dice"
                    onChange={SelectDiceHandler}
                >
                    <MenuItem value={20}>D20</MenuItem>
                    <MenuItem value={12}>D12</MenuItem>
                    <MenuItem value={10}>D10</MenuItem>
                    <MenuItem value={8}>D8</MenuItem>
                    <MenuItem value={6}>D6</MenuItem>
                    <MenuItem value={4}>D4</MenuItem>
                </Select>
            </FormControl>
        </Container>
        <Container maxWidth='sm'>
            <ButtonGroup size='medium' fullWidth={true} variant='contained' className={styles.buttonGroup}
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