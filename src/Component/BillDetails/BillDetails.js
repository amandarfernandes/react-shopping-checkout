import React from 'react';
import BillItem from './BillItem';
import Aux from '../../Aux';

const BillDetails = ({billItems}) =>{
   const items =  billItems.map(item=>(
        <BillItem key={item.label} label={item.label} amount={item.amount} />
    ));

    return (
        <Aux>
            {items}
        </Aux>
    )
   
}

export default BillDetails;