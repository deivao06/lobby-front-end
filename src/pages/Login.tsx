import React, {ReactElement, FC} from "react";
import {Box} from "@mui/material";

const Login: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "primary.light",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                width: '80%',
                height: '90%',
                bgcolor: 'text.primary',
                boxShadow: 2
            }}>

            </Box>
        </Box>
    );
};

export default Login;