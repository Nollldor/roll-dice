import {FC} from "react";
import styles from "./D4.module.css"

type PropsType = {
    value: number | null
}

export const D4: FC<PropsType> = ({value}) => {

    return <div className={styles.d4}>
        <div>{value}</div>
    </div>
}