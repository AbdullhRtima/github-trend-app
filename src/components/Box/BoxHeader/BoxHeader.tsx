/*********************************************************************************************************************
 * File: Box.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the BoxHeader component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, Dropdown, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router-dom';

// style import 
import './BoxHeader.scss';
import { checkIsDev, ROUTE_PATH } from '../../../lib/helpers/router';

// action type 
type HeaderActionType = "dev" | "repo" | "";
// box type 
interface BoxHeaderPropsType {
    actionType: HeaderActionType
};

const BoxHeader = (props: BoxHeaderPropsType) => {
    // state 
    const [route, setRoute] = useState<HeaderActionType>('repo');

    // router hooks 
    const { pathname } = useLocation();
    console.log("🚀 ~ file: BoxHeader.tsx ~ line 32 ~ BoxHeader ~ pathname", pathname)
    const histroy = useHistory();

    // render date range menu 
    const renderDateRangeMenu = useMemo(() => {
        return (
            <Menu>
                <Menu.Item key="0">
                    <a href="https://www.antgroup.com">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="https://www.aliyun.com">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
    }, []);

    useEffect(() => {
        if (checkIsDev(pathname)) {
            setRoute("dev")
        } else {
            setRoute("repo")
        }
    }, []);

    // handle route change 
    const handleRouteChange = useCallback(async (e) => {
        // reset router 
        setRoute('');
        if (e.target.value === 'dev') {
            setRoute('dev');
            await histroy.push(ROUTE_PATH.TREND_DEV)
        } else if (e.target.value === 'repo') {
            setRoute('repo');
            await histroy.push(ROUTE_PATH.TREND_REPO)
        }
    }, [pathname, route]);

    return (
        <div className="box-header">
            <div>
                <Radio.Group
                    value={route}
                    onChange={handleRouteChange}
                    defaultValue={route}
                    buttonStyle="solid"
                >
                    <Radio.Button value="repo">Repositories</Radio.Button>
                    <Radio.Button value="dev">Developers</Radio.Button>
                </Radio.Group>
            </div>
            <div className="box-header__controls">
                {!checkIsDev(pathname) && <Dropdown overlay={renderDateRangeMenu} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                        Spoken Language : <span>Any </span><DownOutlined />
                    </a>
                </Dropdown>}
                <Dropdown className="box-header__downdrop" overlay={renderDateRangeMenu} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                        Language : <span>Any </span><DownOutlined />
                    </a>
                </Dropdown>
                <Dropdown overlay={renderDateRangeMenu} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                        Date Range : <span>Today </span><DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default BoxHeader;
