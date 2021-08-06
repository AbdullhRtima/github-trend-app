/*********************************************************************************************************************
 * File: TrendingDevs.tsx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-05
 * Desc: this file contains the trending developers page 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

import React, { useEffect } from 'react';
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

    // !FOR TEST PURPOSES 
    // useEffect(() => {
    //     fetch('https://gh-trending-api.herokuapp.com/developers')
    //         .then(response => console.log("🚀 ~ file: TrendingDevs.tsx ~ line 26 ~ useEffect ~ response", response))
    //         .then(data => console.log(data));
    //     githubTrends({ section: 'developers', since: 'weekly' })
    //         .then((res: any) => {
    //             console.log("🚀 ~ file: TrendingDevs.tsx ~ line 18 ~ TrendingDevs ~ res", res)
    //         })
    // }, []);

    return (
        <div>
            Hello Dev
        </div>
    )
}

export default TrendingDevs;
