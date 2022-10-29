import {FC} from "react";
import styles from "./D20.module.css"

type PropsType = {
    value: number | null
}

export const D20:FC<PropsType> = ({value}) => {

    return <div className={styles.d20}>
        <div>{value}</div>
    </div>
}