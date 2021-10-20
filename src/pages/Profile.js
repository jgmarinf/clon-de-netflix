import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Plans from './../components/Plans';
import netflixavatar from "../imagenes/netflixavatar.jpg";
import { NetflixButton } from '../styled/styledcomponents';
import SignUp from './SignUp';
import { useHistory } from 'react-router';
import { auth } from './../firebase';

const Profile = () => {
    const classes = useStyle ();
    const history = useHistory();

    const signout = ()=> {
        auth.signOut();
        history.push("/login")
    }
    return (
        <div className={classes.root}>
            <Header/>
            <Typography variant= "h3">Edit profile</Typography>
            <div className={classes.info}>
                <img src={netflixavatar} alt="avatar"/>
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant="h6">email usuario</Typography>
                        <Typography className={classes.plansText} variant="h5" gutterBottom>plans</Typography>
                        <Plans cost={0.99}><p>Netflix Standard</p><p>0.99 US</p></Plans>
                        <Plans cost={11.99}><p>Netflix Basic</p><p>11.99 US</p></Plans>
                        <Plans wide= "medium" color= "gray" cost={15.99}><p>Netflix Premium</p><p>15.99 US</p></Plans>
                        <NetflixButton onClick= {signout} wide= "fullWidth">Sign Out</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root : {
      color: "#fff",
      minHeight: "100vh",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    info: {
        width: "80%",
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            },
        },
    },
    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px",
        }
    },
    plans: {
        width: "100%",        
    },
    plansText: {
        borderBottom: "1px solid lightgray",
    },
  }));

export default Profile
