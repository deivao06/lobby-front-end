import React, {ReactElement, FC} from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import SoloFilledTextField from "../components/SoloFilledTextField";

const Login: FC<any> = (): ReactElement => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));

    let image = <Grid item xs={!matchesLg ? 6 : 8} className="form-container-image" sx={{
        height: '100%',
        borderRadius: "0px 0px 0px 300px",
        backgroundImage: "url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPositionX: !matchesLg ? -500 : -200,
        boxShadow: 3
    }}>
    </Grid>;

    return (
        <Box className="background" sx={{
            flexGrow: 1,
            backgroundColor: "primary.dark",
            backgroundImage: !matchesMd ? "url(/images/background.jpg)" : "",
            backgroundPositionX: !matchesMd ? -100 : "",
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
                        <Typography variant="h3" color={'text.secondary'} padding={3} fontWeight={"bold"} alignSelf={"left"} noWrap>NOME/LOGO</Typography>
                        <SoloFilledTextField type="text" placeholder="E-mail" />
                        <SoloFilledTextField type="password" placeholder="Password" />
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            width={'100%'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Button sx={{ 
                                    marginTop: 3, 
                                    padding: 3, 
                                    borderRadius: 3,
                                    fontWeight: 'bold'
                                }}
                                variant="contained"
                                color="primary"
                            > 
                                Login
                            </Button>
                            <Button sx={{ 
                                    marginTop: 3, 
                                    padding: 3, 
                                    borderRadius: 3,
                                    fontWeight: 'bold'
                                }}
                                component={ Link }
                                to={'/register'}
                                variant="contained" 
                                color="secondary"
                            > 
                                Register
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {matchesMd && image}
            </Grid>
        </Box>
    );
};

export default Login;