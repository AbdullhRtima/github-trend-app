/*********************************************************************************************************************
 * File: Layout.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Layout component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React from 'react';
import { Layout as AntdLayout } from 'antd';
import Header from './Header';

// import style 
import './Layout.scss';

// type and interfaces 
type LayoutPropsType = {
    children: any;
}

const Layout = (props: LayoutPropsType) => {
    return (
        <div className="main-layout">
            <AntdLayout>
                <Header />
                {props.children}
            </AntdLayout>
        </div>
    )
}

export default Layout;
