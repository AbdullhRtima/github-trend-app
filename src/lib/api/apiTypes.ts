/*********************************************************************************************************************
 * File: apiTypes.ts
 * Developed By Abdullah abu rtima 
 * Email: abdullahaburtima@gmail.com
 * Date: 2021-08-05
 * Desc: this file contains the API  response types 
 * Copyright (c) - https://www.coinmena.com/
 *********************************************************************************************************************/

//  PopularRepository type 
type PopularRepository = {
    repositoryName: string;
    description: string;
    url: string;
};

// built by developer 
type BuiltByDeveloper = {
    username: string;
    url: string;
    avatar: string;
};

// single repo interface
interface Developers {
    rank: string;
    username: string;
    name: string;
    url: string;
    avatar: string;
    since: string;
    popularRepository: PopularRepository;
};
// Repository interface 
interface Repository {
    rank: number,
    username: string,
    repositoryName: string,
    url: string,
    description: string,
    language: string,
    languageColor: string,
    totalStars: number,
    forks: number,
    starsSince: number,
    since: string,
    builtBy: BuiltByDeveloper[]
};

export type {
    Repository,
    Developers
}
