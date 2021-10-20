import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../styled/styledcomponents';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setPrice } from '../features/priceSlice';

const Plans = ({cost, children, color, wide}) => {
    const classes = useStyle ();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick= (cost)=>{
        dispatch(setPrice(cost))
        history.push("/checkout")
    };
    return (
        <div className={classes.root}>
            <Typography className={classes.standard} variant= "h5">
                {children}
            </Typography>   
            <NetflixButton color={color} wide={wide} onClick= { ()=> handleClick(cost)} >Subscribe</NetflixButton>    
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root : {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& button": {
          marginBottom: theme.spacing(2),
      },
    },
    standard: {
        fontSize: "1.2rem",
    },
  }));

export default Plans
