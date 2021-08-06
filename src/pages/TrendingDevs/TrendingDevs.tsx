/*********************************************************************************************************************
 * File: TrendingDevs.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-05
 * Desc: this file contains the trending developers page 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React from 'react';
import { useQuery } from 'react-query'
import githubTrends from 'github-trends-api';

const TrendingDevs = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        githubTrends({ section: 'developers', since: 'weekly' })
            .then((res: any) => {
                console.log("🚀 ~ file: TrendingDevs.tsx ~ line 18 ~ TrendingDevs ~ res", res)
            })
    );
    console.log("🚀 ~ file: TrendingDevs.tsx ~ line 16 ~ TrendingDevs ~ data", data)

    return (
        <div>
            Hello Dev
        </div>
    )
}

export default TrendingDevs;