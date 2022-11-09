import React, {useRef, useState} from 'react';
import {SwitchTransition, CSSTransition} from "react-transition-group";
import './App.css';
import './styleComponents.css'
import StartComponent from "./Components/StartComponent";
import GameComponent from "./Components/GameComponent";

type Init = {
    type:string,
    amount:number,
    values:number
}
const init:Init = {
    type:'ascend',
    amount:2,
    values:591
}

function App() {
    const [page, setPage] = useState(false)
    const [storage,setStorage] = useState(init)
    const StartPageRef = useRef(null)
    const GamePageRef = useRef(null)
    const nodeRef = page ? GamePageRef : StartPageRef
    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={page ? "GamePage" : "StartPage"}
                nodeRef={nodeRef}
                timeout={500}
                classNames={'ChangePage'}
            >
                {page ? <div className={'container'} ref={GamePageRef}>
                    <GameComponent storage={storage} setPage={setPage}/>
                </div> : <div className={'container'} ref={StartPageRef}>
                  <StartComponent setStorage={setStorage} ChangeBoolean={setPage}/>
                </div>}
            </CSSTransition>
        </SwitchTransition>
    );
}

export default App;
