import React, {ReactElement, FC} from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

import ReplyIcon from '@mui/icons-material/Reply';
import SoloFilledTextField from "../components/SoloFilledTextField";

const Register: FC<any> = (): ReactElement => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));

    let image = <Grid item xs={!matchesLg ? 6 : 8} className="form-container-image" sx={{
        height: '100%',
        borderRadius: "0px 0px 0px 300px",
        backgroundImage: "url(/images/register-background.jpg)",
        backgroundSize: "cover",
        backgroundPositionX: !matchesLg ? -300 : -200,
        boxShadow: 3
    }}>
    </Grid>;

    return (
        <Box className="background" sx={{
            flexGrow: 1,
            backgroundColor: "secondary.main",
            backgroundImage: !matchesMd ? "url(/images/register-background.jpg)" : "",
            backgroundSize: "cover",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid 
                className="form-container" 
                container
                width={'80%'}
                height={'90%'}
                bgcolor={'text.primary'}
                boxShadow={3}
                display={'flex'}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    ':hover': {
                        boxShadow: 10,
                    },
                }}
            >
                <Grid item xs={matchesLg ? 4 : ( matchesMd ? 6 : 12)} height={'100%'}>
                    <Box
                        className="login-form"
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        bgcolor={'text.primary'}
                        p={5}
                        height={'100%'}
                    >
                        <Typography variant="h3" color={'text.secondary'} padding={3} fontWeight={"bold"} alignSelf={"left"} noWrap>REGISTER</Typography>
                        <SoloFilledTextField type="text" placeholder="Username" />
                        <SoloFilledTextField type="text" placeholder="E-mail" />
                        <SoloFilledTextField type="password" placeholder="Password" />
                        <SoloFilledTextField type="password" placeholder="Confirm Password" />
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            width={'100%'}
                            justifyContent={'left'}
                            alignItems={'center'}
                        >
                            <Button sx={{ 
                                    marginTop: 3, 
                                    padding: 3, 
                                    borderRadius: 3,
                                    fontWeight: 'bold'
                                }}
                                component={ Link }
                                to={'/login'}
                                variant="contained"
                                color="secondary"
                            > 
                                <ReplyIcon />
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {matchesMd && image}
            </Grid>
        </Box>
    );
};

export default Register;