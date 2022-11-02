import React, {FC} from "react";
import {D20} from "../D20/D20";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import styles from './DicesValues.module.css'


type PropsType = {

}

export const DicesBlock:FC<PropsType> = ({}) => {

    const dicesValues = useSelector<AppRootStateType, (number | null)[]>(state => state.dices.dicesValues)

    return <div className={styles.dicesBlock}>
        {dicesValues.map((num, index) => (
            <D20 key={index} value={num}/>
        ))}
    </div>
}