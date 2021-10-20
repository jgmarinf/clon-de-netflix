import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core';
import HeroBanner from "../imagenes/HeroBanner.jpg";
import logo from "../imagenes/n.png";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useState } from 'react';
import SignUp from './SignUp';


const Login = () => {
    const classes = useStyle ();
    const [signIn, setSignIn] = useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt="logo"/>
            <NetflixButton className= {classes.session}>Iniciar session</NetflixButton>
            <div className={classes.info}>
                {!signIn ? (<SignUp/>) : (
                        <><Typography variant="h4" gutterBottom>
                            Unlimited films,tv programes and more.
                        </Typography><Typography variant="h5" gutterBottom>
                                Watch anywhere. Cancel at any time.
                            </Typography><Typography variant="h6" gutterBottom>
                                Ready to Watch ? Enter your email to create or restart your membership.
                            </Typography><div className={classes.inputBlock}>
                                <NetflixInput placeholder="Email address"></NetflixInput>
                                <NetflixButton>GET STARTED</NetflixButton>
                            </div></>
                    )
                }
                
            </div>
        </div>
    )
}
// constante para estilizar
const useStyle = makeStyles((theme) => ({
    root : {
      position: "relative",
      height: "100vh",
      backgroundImage: `url(${HeroBanner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"   
    },
    session: {
        position: "fixed",
        zIndex: "15",
        right: 20,
        top: 20,
    },
    info: {
        color: "#fff",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontWeight: 800,
        },
        "& h5": {
            fontWeight: 400,
        },
    },
    logo : {
        position: "fixed",
        top: 10,
        left: 20,
        width: "100px",
        cursor: "pointer",
      },
  }));

export default Login
