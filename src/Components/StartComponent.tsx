import React, {Dispatch, SetStateAction, useState} from 'react';
import backgroundFirstPage from '../DataAssets/backgroundFirstPage.png';
import {H3, Ul,InputStyled} from "./StyledComponents";
import {Button} from "@mui/material";

type Init = {
    amount:number,
    values:number,
    type:string
}

const init = {
    amount:2,
    values:0,
    type:'ascend'
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface props {
    setStorage:Dispatch<SetStateAction<Init>>,
    ChangeBoolean:Dispatch<SetStateAction<boolean>>
}

const StartComponent = ({setStorage,ChangeBoolean}:props) => {
    const [itemList,setItemList] = useState(init)

    const handleChangeNumber = (e:InputEvent) => {
        e.preventDefault()
        const {name,value} = e.target
        return setItemList(prev=> ({...prev,[name]:+value}))
    }
    const handleClick = (text:string) => {
        setItemList(prev => ({...prev,type:text}))
    }
    const setItems = () => {
        let value = 0
        if (itemList.values === 0) value = Math.floor(Math.random() * 999)
        if (itemList.values === 1) value = 9
        if (itemList.values === 2) value = 19
        if (itemList.values === 3) value = 50
        if (itemList.values === 4) value = 99
        if (itemList.values === 5) value = 999
        // setStorage(prev => ({
        //     ...prev,
        //     type:itemList.type,
        //     amount:itemList.amount,
        //     values:value
        // }))
        // Внесение изменений
        setStorage(prev => ({
            ...prev,type:itemList.type,
            amount:itemList.amount,
            values: value
        }))
        ChangeBoolean(true)
    }
        return (
                <div className={'MainGame'}>
                    <img src={backgroundFirstPage} alt={'backgroundFirstPage'} className={'MainGame__picture'}/>
                    <div className={'borderWrapper'}>
                        <form className={'MainGame_firstSlide'}>
                            <div className={'firstSlide_amount'}>
                                <H3>Кол-во предметов</H3>
                                <Ul>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </Ul>
                                <InputStyled type={'range'} value={itemList.amount} min={2} max={5}
                                            onChange={handleChangeNumber} name={'amount'}/>
                            </div>
                            <div className={'firstSlide_values'}>
                                <H3>Значение</H3>
                                <Ul>
                                    <li>A</li>
                                    <li>9</li>
                                    <li>19</li>
                                    <li>50</li>
                                    <li>99</li>
                                    <li>999</li>
                                </Ul>
                                <InputStyled type='range' min={0} max={5} onChange={handleChangeNumber}
                                            value={itemList.values} name={'values'}/>
                            </div>
                            <div className={'firstSlide_buttonBlock'}>
                                <Button
                                    onClick={() => handleClick('ascend')}
                                    className={itemList.type === 'ascend' ? 'ButtonDisabled' : 'Button'}
                                    disabled={itemList.type === 'ascend'}>
                                    По возрастанию</Button>
                                <Button
                                    onClick={() => handleClick('descend')}
                                    className={itemList.type === 'descend' ? 'ButtonDisabled' : 'Button'}
                                    disabled={itemList.type === 'descend'}>
                                    По убыванию</Button>
                            </div>
                            <Button
                                className={'firstSlide_gameButton'}
                                onClick={setItems}
                            >
                                Играть
                            </Button>
                        </form>
                    </div>
                </div>
        );

};

export default StartComponent;