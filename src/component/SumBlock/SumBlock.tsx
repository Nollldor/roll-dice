import React, {FC} from "react";
import {Container, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import style from './SumBlock.module.css'
import {blue} from "@mui/material/colors";

type PropsType = {
    rollingMode: boolean
    sum: number
}


export const SumBlock: FC<PropsType> = ({rollingMode, sum}) => {

    return <Container maxWidth='sm' className={style.sumBlock}>
        <Paper elevation={10} sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            height: "100%",
        }}>
            <Typography variant={"h6"}>
                Sum of dices:
            </Typography>

            <Typography variant={"h6"}>
                {!rollingMode && sum}
            </Typography>
        </Paper>
    </Container>

}