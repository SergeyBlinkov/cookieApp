import React, {Dispatch, SetStateAction} from 'react';
import {winStarBigSvg, winStarSmSvg, winSvg} from "./DataAssets";
import {Button} from "@mui/material";

interface Props {
    setPage:Dispatch<SetStateAction<boolean>>
}

const FinishComponent = ({setPage}:Props) => {
    const finishClick = () => {
        setPage(false)
        return setTimeout(()=>window.location.reload(),700)
    }
    return (

            <div className={'wrapperFinishComponent'}>
                <div className={'finishComponent'}>
                    <img src={winSvg} alt={'winPicture'} className={'finishComponent_textPic'}/>
                    <img src={winStarBigSvg} alt={'bigStar1'}  className={'finishComponent_star1'}/>
                    <img src={winStarBigSvg} alt={'bigStar2'}  className={'finishComponent_star2'}/>
                    <img src={winStarSmSvg} alt={'smStar1'}  className={'finishComponent_star3'}/>
                    <img src={winStarSmSvg} alt={'smStar2'}  className={'finishComponent_star4'}/>
                    <h3>Молодец! Ты успешно справился с заданием!</h3>
                    <Button  className={'finishComponent_button'} onClick={finishClick}>Заново</Button>
                </div>
            </div>

    );
};

export default FinishComponent;