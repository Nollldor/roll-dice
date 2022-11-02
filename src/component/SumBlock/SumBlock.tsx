import React, {FC} from "react";
import {Typography} from "@mui/material";
import style from './SumBlock.module.css'

type PropsType = {
    rollingMode: boolean
    sum: number
}

export const SumBlock:FC<PropsType> = ({rollingMode, sum}) => {

    return <div className={style.sumBlock}>
        <Typography variant={"h6"}>
            Sum of dices: {!rollingMode && sum}
        </Typography>
    </div>
}