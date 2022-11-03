import {FC} from "react";
import styles from "./D10.module.css"

type PropsType = {
    value: number | null
}

export const D10: FC<PropsType> = ({value}) => {

    return <div className={styles.d10}>
        <div>{value}</div>
    </div>
}