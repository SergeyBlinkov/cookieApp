import backgroundFlashlightLeft from '../DataAssets/backgroundFlashlightLeft.svg'
import backgroundFlashlightRight from '../DataAssets/backgroundFlashlightRight.svg'
import backgroundLightsTreeLeft from '../DataAssets/backgroundLightsTreeLeft.svg'
import backgroundLightsTreeRight from '../DataAssets/backgroundLightsTreeRight.svg'
import backgroundFlowersLD from '../DataAssets/backgroundFlowersLD.svg'
import backgroundFlowersLU from '../DataAssets/backgroundFlowersLU.svg'
import backgroundFlowersRU from '../DataAssets/backgroundFlowersRU.svg'
import backgroundFlowersRD from '../DataAssets/backgroundFlowersRD.svg'
import backgroundCoinsLeft from '../DataAssets/coinsBackgroundLeft.svg'
import backgroundCoinsRight from '../DataAssets/coinsBackgroundRight.svg'
import backgroundCookies1 from '../DataAssets/backgroundCookies1.svg';
import backgroundCookies2 from '../DataAssets/backgroundCookies2.svg'
import styled from 'styled-components';

const BackCookiesLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`
const BackCookiesRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

export const BehindSceneCookies = () => {

    return (
        <div className={'BehindCookies'}>
            <BackCookiesLeft src={backgroundCookies1} alt={'backgroundCookies'}/>
            <BackCookiesRight src={backgroundCookies2} alt={'backgroundCookiesSm'}/>
        </div>
    )
}

export const BehindSceneCoins = () => {
    return (
        <div className={'BehindCoins'}>
            <BackCookiesLeft src={backgroundCoinsLeft} alt={'backgroundCoins'}/>
            <BackCookiesRight src={backgroundCoinsRight} alt={'backgroundCoinsRight'}/>
        </div>
    )
}

export const BehindSceneFlowers = () => {
    return (
        <div className={'FlowersBehind'}>
            <img src={backgroundFlowersLU} className={'FlowersBehind_LU'} alt="flowers1"/>
            <img src={backgroundFlowersLD} className={'FlowersBehind_LD'} alt="flowers2"/>
            <img src={backgroundFlowersRU} className={'FlowersBehind_RU'} alt="flowers3"/>
            <img src={backgroundFlowersRD} className={'FlowersBehind_RD'} alt="flowers4"/>
        </div>
    )
}

export const BehindSceneLights = () => {
    return (
        <>
            <img src={backgroundLightsTreeLeft} alt="backlights1"/>
            <img src={backgroundLightsTreeRight} alt="backlights2"/>
            <img src={backgroundFlashlightLeft} alt="backlights3"/>
            <img src={backgroundFlashlightRight} alt="backlights4"/>
        </>
    )
}