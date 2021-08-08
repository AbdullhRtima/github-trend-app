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

// import style 
import './DevCard.scss';

// constant
const { Text } = Typography;

const DevCard = (props: any) => {
    return (
        <div className="dev-card">

            <div className="dev-card__avatar">
                <div>
                    1
                </div>
                &nbsp;
                <Avatar size={"large"} icon={<UserOutlined />} />
                &nbsp;
                <div className="dev-card__name-wapper">
                    <Text className="dev-card__name">Niklas von Hertzen </Text>
                    <Text className="dev-card__name-des">Niklas von Hertzen </Text>
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
