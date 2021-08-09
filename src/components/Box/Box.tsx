/*********************************************************************************************************************
 * File: Box.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Box component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useMemo } from 'react';
import BoxHeader from './BoxHeader';
import { useLocation } from 'react-router-dom';

// style import 
import './Box.scss';
import { checkIsDev, ROUTE_PATH } from '../../lib/helpers/router';

// box type 
interface BoxPropsType {
    children: any;
};

const Box = (props: BoxPropsType) => {
    // router hooks 
    const { pathname } = useLocation();

    // render Box header type 
    const renderedBoxType = useMemo(() => {
        if (checkIsDev(pathname)) {
            return "dev"
        } else {
            return "repo"
        }
    }, [pathname]);

    return (
        <div className="box">
            <BoxHeader actionType={renderedBoxType} />
            {props.children}
        </div>
    )
}

export default Box;
