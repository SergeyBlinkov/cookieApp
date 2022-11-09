import cookie1 from '../DataAssets/cookie1.svg';
import cookie2 from '../DataAssets/cookie2.svg';
import cookie3 from '../DataAssets/cookie3.svg';
import cookie4 from '../DataAssets/cookie4.svg';
import win from '../DataAssets/win.svg';
import winStarBig from  '../DataAssets/winStar.svg'
import winStarSm from '../DataAssets/winStarSm.svg';
import emptySlots1 from '../DataAssets/emptySlots1.svg';
import emptySlots3 from '../DataAssets/emptySlots3.svg';
import emptySlots4 from '../DataAssets/emptySlots4.svg';
import emptySlots5 from '../DataAssets/emptySlots5.png';
import backgroundFirstPagePic from '../DataAssets/backgroundFirstPage.png';
import flowers1 from '../DataAssets/flower1.svg'
import flowers2 from '../DataAssets/flower2.svg'
import flowers3 from '../DataAssets/flower3.svg'
import coins1 from '../DataAssets/coins1.svg'
import coins2 from '../DataAssets/coins2.svg'
import coins3 from '../DataAssets/coins3.svg'
import coins5 from '../DataAssets/coins5.svg'
import lights1 from '../DataAssets/lights1.svg'
import lights2 from '../DataAssets/lights2.svg'
import lights3 from '../DataAssets/lights3.svg'
import lights4 from '../DataAssets/lights4.svg'
import lights5 from '../DataAssets/lights5.svg'
import {BehindSceneCoins, BehindSceneCookies, BehindSceneFlowers, BehindSceneLights} from "./BehindScene";


export const backgroundFirstPage = backgroundFirstPagePic
export const winSvg = win
export const winStarBigSvg = winStarBig
export const winStarSmSvg = winStarSm

export const sceneCookies = {
    items: [cookie1,cookie2,cookie3,cookie4],
    background: <BehindSceneCookies />,
    emptySlots: emptySlots1
}
export const sceneFlowers = {
    items: [flowers1,flowers2,flowers3],
    background:<BehindSceneFlowers />,
    emptySlots: emptySlots3
}
export const sceneCoins = {
    items: [coins1,coins2,coins3,coins5],
    background:<BehindSceneCoins />,
    emptySlots: emptySlots4
}
export const sceneLights = {
    items: [lights1,lights2,lights3,lights4,lights5],
    background: <BehindSceneLights />,
    emptySlots: emptySlots5
}

export const allScenes = [sceneCoins,sceneCookies,sceneFlowers,sceneLights]
const element1of5 = {
    xPos: 62,
    yPos: 233
}
const element2of5 = {
    xPos: 269,
    yPos: 133
}
const element3of5 = {
    xPos: 399,
    yPos: 281
}
const element4of5 = {
    xPos: 514,
    yPos: 138
}
const element5of5 = {
    xPos: 738,
    yPos: 240
}
const positionCookies5 = [element1of5,element2of5,element3of5,element4of5,element5of5]

const element1of4 = {
    xPos: 109,
    yPos: 233
}
const element2of4 = {
    xPos: 316,
    yPos: 133
}
const element3of4 = {
    xPos: 506,
    yPos: 233
}
const element4of4 = {
    xPos: 715,
    yPos: 132
}
const positionCookies4 = [element1of4,element2of4,element3of4,element4of4]
const element1of3 = {
    xPos: 213,
    yPos: 233
}
const element2of3 = {
    xPos: 428,
    yPos: 133
}
const element3of3 = {
    xPos: 618,
    yPos: 233
}
const positionCookies3 = [element1of3,element2of3,element3of3]

const element1of2 = {
    xPos: 311,
    yPos: 168
}
const element2of2 = {
    xPos: 513,
    yPos: 168
}

const positionCookies2 = [element1of2,element2of2]

export const makeArray = (amount:number) => {
    if(amount === 2) return positionCookies2
    if(amount === 3) return positionCookies3
    if(amount === 4) return positionCookies4
    if(amount === 5) return positionCookies5
    else return positionCookies2
}