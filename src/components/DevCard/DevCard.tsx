/*********************************************************************************************************************
 * File: DevCard.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Dev Card component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useCallback } from 'react';
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

    // handle go to repo by URL 
    const handleOpenLink = useCallback((url: string) => {
        window.open(url, "__blank")
    }, [props]);

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
                    <Text
                        onClick={() => handleOpenLink(props.dev.url)}
                        className="dev-card__name"
                    >
                        {props.dev.name}
                    </Text>
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
                {props.dev.popularRepository?.repositoryName && <div className="dev-card__repo">
                    <BookOutlined />
                    &nbsp;
                    <Text
                        onClick={() => handleOpenLink(props.dev.popularRepository.url)}
                        className="dev-card__repo-text"
                    >
                        {props.dev.popularRepository.repositoryName } afklsdfl ajdvksjv sdvksd
                    </Text>
                </div>}
                {props.dev.popularRepository.description && <div >
                    <Text className="dev-card__repo-des">
                        {props.dev.popularRepository.description}
                    </Text>
                </div>}
            </div>
            <div >
                <Button
                    onClick={() => handleOpenLink(props.dev.url)}
                    className="dev-card__btn" icon={<HeartOutlined />}
                >
                    Sponsor
                </Button>
                <Button
                    onClick={() => handleOpenLink(props.dev.url)}
                    className="dev-card__btn"
                >
                    Follow
                </Button>
            </div>
        </div>
    )
}

export default DevCard;
