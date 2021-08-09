/*********************************************************************************************************************
 * File: TrendingRepo.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-05
 * Desc: this file contains the trending repository page 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React from 'react';
import Box from '../../components/Box';
import Layout from '../../components/Layout';
import RepoCard from '../../components/RepoCard/RepoCard';
import { repository } from '../../lib/dummy';

const TrendingRepo = () => {
    return (
        <Layout>
            <Box>
                {repository.map((repo: any) => {
                    return (
                        <RepoCard repo={repo} />
                    )
                })}
            </Box>
        </Layout>
    )
}

export default TrendingRepo;