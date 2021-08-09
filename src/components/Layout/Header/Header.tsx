/*********************************************************************************************************************
 * File: Header.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Header component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useMemo } from 'react';
import { Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { checkIsDev, ROUTE_PATH } from '../../../lib/helpers/router';

// import style 
import './Header.scss';

// constant 
const { Title, Text } = Typography;


const Header = (props: any) => {
    
    // router hooks 
    const { pathname } = useLocation();

    const renderedDescription = useMemo(() => {
        if (checkIsDev(pathname)) {
            return "These are the developers building the hot tools today."
        } else {
            return "See what the GitHub community is most excited about today."
        }
    }, [pathname]);
    
    return (
        <React.Fragment>
            <div className="header">
                <Title level={1} className="header__title"> Trending </Title>
                <Text className="header__des">{renderedDescription}</Text>
            </div>

        </React.Fragment>
    )
}

export default Header;
