import {FC} from "react";
import styles from "./D12.module.css"

type PropsType = {
    value: number | null
}

export const D12: FC<PropsType> = ({value}) => {

    return <div className={styles.d12}>
        <div>{value}</div>
    </div>
}