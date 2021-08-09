
/*********************************************************************************************************************
 * File: router.tx
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-05
 * Desc: this file contains the router helpers 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

// interface for ROUTE_PATH
export interface RoutePath {
    TREND_DEV: string,
    TREND_REPO: string
};

// ROUTES 
export const ROUTE_PATH: RoutePath = {
    TREND_REPO: "/",
    TREND_DEV: "/developer",
}

// render Box header type 
export const checkIsDev = (pathName: string) => {
    return pathName.includes(ROUTE_PATH.TREND_DEV)
};
