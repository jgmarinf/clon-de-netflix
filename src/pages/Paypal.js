import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectPrice } from './../features/priceSlice';

const Paypal = () => {
    const classes = useStyle ();
    const price = useSelector(selectPrice);
    const paypal = useRef();

    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err)=> {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Netflix subscription",
                            amount: {
                                currency_code: "USD",
                                value: price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions)=> {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: err => console.log(err),

        }).render(paypal.current)


    },[])

    return (
        <div className={classes.root}>
            <div ref= {paypal}>
            
            </div>
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root : {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
  }));

export default Paypal

