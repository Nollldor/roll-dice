import React, {FC} from "react";
import {D20} from "../DicesComponents/D20/D20";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import styles from './DicesValues.module.css'
import {D12} from "../DicesComponents/D12/D12";
import {D10} from "../DicesComponents/D10/D10";
import {D8} from "../DicesComponents/D8/D8";
import {D6} from "../DicesComponents/D6/D6";
import {D4} from "../DicesComponents/D4/D4";

type PropsType = {}

export const DicesBlock: FC<PropsType> = ({}) => {

    const dicesValues = useSelector<AppRootStateType, (number | null)[]>(state => state.dices.dicesValues)
    const maxDiceValue = useSelector<AppRootStateType, number>(state => state.dices.maxDiceValue)

    return <div className={styles.dicesBlock}>
        {
            {
                '12': dicesValues.map((num, index) => <D12 key={index} value={num}/>),
                '20': dicesValues.map((num, index) => <D20 key={index} value={num}/>),
                '10': dicesValues.map((num, index) => <D10 key={index} value={num}/>),
                '8': dicesValues.map((num, index) => <D8 key={index} value={num}/>),
                '6': dicesValues.map((num, index) => <D6 key={index} value={num}/>),
                '4': dicesValues.map((num, index) => <D4 key={index} value={num}/>),
            }[maxDiceValue]
        }
    </div>
}