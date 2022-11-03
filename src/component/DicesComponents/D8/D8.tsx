import {FC} from "react";
import styles from "./D8.module.css"

type PropsType = {
    value: number | null
}

export const D8: FC<PropsType> = ({value}) => {

    return <div className={styles.d8}>
        <div>{value}</div>
    </div>
}