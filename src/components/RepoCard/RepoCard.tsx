/*********************************************************************************************************************
 * File: RepoCard.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-08
 * Desc: this file contains the Repo Card component 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useCallback } from 'react';
import { Typography, Button, Popover, Avatar } from 'antd';
import { BookOutlined, StarOutlined, BranchesOutlined } from '@ant-design/icons';
import { Repository } from '../../lib/api';

// import style 
import './RepoCard.scss';

// type and interface 
export interface RepoCardPropsType {
    repo: Repository
};

const { Text } = Typography;

const RepoCard = (props: RepoCardPropsType) => {

    // handle go to repo by URL 
    const handleOpenLink = useCallback((url: string) => {
        window.open(url, "__blank")
    }, [props]);

    return (
        <div className="repo-card">
            <div className="repo-card__details">
                <div className="repo-card__repo-name-wrapper">
                    <BookOutlined /> &nbsp;
                    <Text
                        onClick={() => handleOpenLink(`${props.repo.url}`)}
                        className="repo-card__repo-name"
                    >
                        {props.repo.repositoryName}
                    </Text>
                </div>
                <div>
                    <Text className="repo-card__repo-des">
                        {props.repo.description}
                    </Text>
                </div>
                <div className="repo-card__more-details">
                    {props.repo.language && <div>
                        <Text className="repo-card__prog-lang">
                            {props.repo.language}
                        </Text>
                    </div>}
                    {props.repo.forks && <div
                        onClick={() => handleOpenLink(`${props.repo.url}/network/members.${props.repo?.username}`)}
                        className="repo-card__forks"
                    >
                        <BranchesOutlined /> {props.repo.forks}
                    </div>}
                    {props.repo.totalStars && <div
                        onClick={() => handleOpenLink(`${props.repo.url}/stargazers`)}
                        className="repo-card__star"
                    >
                        <StarOutlined /> {props.repo.totalStars}
                    </div>}
                    <div className="repo-card__developers">
                        {props.repo.builtBy.length !== 0 &&
                            props.repo.builtBy.map(dev => {
                                return (
                                    <Popover
                                        content={() => {
                                            return (
                                                <div>
                                                    <Avatar
                                                        className='repo-card__avatar'
                                                        src={dev.avatar}
                                                        size="large"
                                                    /> &nbsp;
                                                    <Text className="repo-card__developer-name">
                                                        {dev.username}
                                                    </Text>
                                                </div>
                                            )
                                        }}
                                    >
                                        <div onClick={() => handleOpenLink(dev.url)}>
                                            <Avatar
                                                className='repo-card__avatar'
                                                src={dev.avatar}
                                                size="small"
                                            />
                                        </div>
                                    </Popover>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="repo-card__actions">
                <Button
                    className="repo-card__btn"
                    icon={<StarOutlined />}
                    onClick={() => handleOpenLink(`${props.repo.url}`)}
                >
                    star
                </Button>
            </div>
        </div>
    )
}

export default RepoCard;
