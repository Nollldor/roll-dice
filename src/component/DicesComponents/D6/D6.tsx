import {FC} from "react";
import styles from "./D6.module.css"

type PropsType = {
    value: number | null
}

export const D6: FC<PropsType> = ({value}) => {

    return <div className={styles.d6}>
        <div>{value}</div>
    </div>
}