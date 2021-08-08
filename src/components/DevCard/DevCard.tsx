/*********************************************************************************************************************
 * File: DevCard.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Dev Card component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React from 'react';
import { Avatar, Typography, Button } from 'antd';
import { UserOutlined, FireOutlined, BookOutlined, HeartOutlined } from '@ant-design/icons';
import { Developers } from '../../lib/api';

// import style 
import './DevCard.scss';

// constant
const { Text } = Typography;

export interface DevCardPropsTypes {
    dev: Developers;
    index: number;
};

const DevCard = (props: DevCardPropsTypes) => {

    return (
        <div className="dev-card">

            <div className="dev-card__avatar">
                <div>
                    {props.index + 1}
                </div>
                &nbsp;
                <Avatar src={props.dev?.avatar} size={"large"} icon={<UserOutlined />} />
                &nbsp;
                <div className="dev-card__name-wapper">
                    <Text className="dev-card__name">{props.dev.name}</Text>
                    <Text className="dev-card__name-des">{props.dev.username} </Text>
                </div>
            </div>
            <div className="dev-card__details">
                <div className="dev-card__pop">
                    <FireOutlined />
                    &nbsp;
                    <Text>
                        POPULAR REPO
                    </Text>
                </div>
                <div className="dev-card__repo">
                    <BookOutlined />
                    &nbsp;
                    <Text className="dev-card__repo-text">
                        quic-interop-runner
                    </Text>
                </div>
                <div >
                    <Text className="dev-card__repo-des">
                        quic-interop-runner
                    </Text>
                </div>
            </div>
            <div >
                <Button className="dev-card__btn" icon={<HeartOutlined />}>Sponsor</Button>
                <Button className="dev-card__btn">Follow</Button>
            </div>
        </div>
    )
}

export default DevCard;
