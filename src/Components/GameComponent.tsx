import '../styleComponents.css'
import {
    makeArray
} from "./DataAssets";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import FinishComponent from "./FinishComponent";
import direction from '../DataAssets/direction.svg';
import FillComponent from "./FillComponent";
import {CSSTransition} from "react-transition-group";

type Cookies = {
    number: number,
    picture: string
}

type XYPos = {
    xPos: number,
    yPos: number
}

type Storage = {
    type:string,
    amount:number,
    values:number
}
interface props {
    storage:Storage,
    setPage:Dispatch<SetStateAction<boolean>>
}



function GameComponent({storage,setPage}:props) {
    const {cookies, currentScene} = FillComponent(storage)
    const MainGameRef = useRef<HTMLDivElement | null>(null)
    const wrapperRef= useRef<HTMLDivElement | null>(null)
    const [finish, setFinish] = useState(false)
    const finishArr = []
    const finishRef= useRef(null)
    const compareArray: Cookies[] = []
    const check: boolean = storage.type === 'ascend'
    const filtered: Cookies[] = [...cookies].sort((a, b) => a.number - b.number)
    const reversedArr = check ? filtered : filtered.concat().reverse()
    const emptyBlock = useRef<HTMLDivElement | null>(null)
    compareArray.push(reversedArr[0])
    const cookiesPosition: XYPos[] = makeArray(storage.amount)

    debugger
    useEffect(() => {
        if (!check && emptyBlock.current && wrapperRef.current) {
        const style = emptyBlock.current.style
            const wrapperStyle = wrapperRef.current.style
        style.flexDirection = 'row-reverse'
        style.left = '-95px'
            wrapperStyle.justifyContent = 'flex-end'

    }
       for (let i = 0; i < storage.amount; i++) {
           const target: HTMLElement | null = document.getElementById(`id${i}`)
           if (!target) return
           target.ondragstart = function () {
               return false;
           };
           const getCoords = (elem: Element | null): { top: number, left: number } => {
               let box: DOMRectReadOnly | undefined = elem?.getBoundingClientRect();
               if (box === undefined) return {top: 0, left: 0}
               else {
                   return {
                       top: box.top,
                       left: box.left
                   }
               }
           }

           target.ontouchstart = (e: TouchEvent) => {
               const coords = getCoords(target)
               const centerTargetW = target.offsetWidth / 2;
               const centerTargetH = target.offsetHeight / 2;
               const shiftX = e.touches[0].pageX - coords.left;
               const shiftY = e.touches[0].pageY - coords.top
               const {top, left} = getCoords(MainGameRef.current)
               const onTouchMove = (mouseX: number, mouseY: number) => {
                   target.style.left = mouseX - left - shiftX + 'px';
                   target.style.top = mouseY - top - shiftY + 'px';
               }
               target.ontouchmove = (event: TouchEvent) => {
                   onTouchMove(event.touches[0].pageX, event.touches[0].pageY)
               }
               target.ontouchend = (ev: TouchEvent) => {
                   document.ontouchmove = null
                   const value: string | null = target.getAttribute('data-value')
                   const elemBelow: Element = document.elementsFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY).filter(newId => newId.id === 'emptyId')[0]
                   const centerWidth = elemBelow?.clientWidth / 2
                   const centerHeight = elemBelow?.clientHeight / 2
                   const data: string | null = elemBelow?.getAttribute('data-value')
                   console.log(elemBelow,'elemBelow',data,'data')
                   if (value !== data || (data && +data !== compareArray[compareArray.length - 1]?.number)) {
                       target.style.top = cookiesPosition[i]?.yPos + 'px'
                       target.style.left = cookiesPosition[i]?.xPos + 'px'
                   } else {
                       const xPosElem = getCoords(elemBelow).left
                       const yPosElem = getCoords(elemBelow).top
                       const currCenterX: number = xPosElem - left + centerWidth - centerTargetW
                       const currCenterY: number = yPosElem - top + centerHeight - centerTargetH


                       target.onmouseup = null;
                       target.style.pointerEvents = 'none'
                       target.style.top = currCenterY + 'px'
                       target.style.left = currCenterX + 'px'
                       if (compareArray.length === storage.amount) setFinish(true)

                       compareArray.push(reversedArr[compareArray.length])
                   }
               }
           }


           target.onmousedown = (event) => {
               const coords = getCoords(target)
               const shiftX = event.pageX - coords.left;
               const shiftY = event.pageY - coords.top
               const centerTargetW = target.offsetWidth / 2;
               const centerTargetH = target.offsetHeight / 2;
               const {top, left} = getCoords(MainGameRef.current)

               function moveAt(mouseX: number, mouseY: number) {
                   if (!target) return
                   target.style.left = mouseX - left - shiftX + 'px';
                   target.style.top = mouseY - top - shiftY + 'px';
               }

               moveAt(event.pageX, event.pageY)
               document.onmousemove = function (mouseEvent) {
                   moveAt(mouseEvent.pageX, mouseEvent.pageY);
               }
               target.onmouseup = function (ev) {
                   document.onmousemove = null;
                   const value: string | null = target.getAttribute('data-value')
                   const elemBelow: Element = document.elementsFromPoint(ev.pageX, ev.pageY).filter(newId => newId.id === 'emptyId')[0]
                   const centerWidth = elemBelow?.clientWidth / 2
                   const centerHeight = elemBelow?.clientHeight / 2
                   const data: string | null = elemBelow?.getAttribute('data-value')

                   if ((value !== data) || (data && +data !== compareArray[compareArray.length -1]?.number)) {
                       target.style.top = cookiesPosition[i].yPos + 'px'
                       target.style.left = cookiesPosition[i].xPos + 'px'
                   } else {
                       const xPosElem = getCoords(elemBelow).left
                       const yPosElem = getCoords(elemBelow).top
                       const currCenterX: number = xPosElem - left + centerWidth - centerTargetW
                       const currCenterY: number = yPosElem - top + centerHeight - centerTargetH
                       finishArr.push(value)
                       compareArray.push(reversedArr[compareArray.length])
                       target.onmouseup = null;
                       target.style.pointerEvents = 'none'
                       target.style.top = currCenterY + 'px'
                       target.style.left = currCenterX + 'px'

                       if (finishArr.length === storage.amount) setFinish(true)

                   }
               }
           }
       }
       //eslint-disable-next-line
    }, [])
    return (


            <div className={'MainGame'} ref={MainGameRef}>
                <CSSTransition
                in={finish}
                timeout={500}
                classNames={'ShowFinish'}
                nodeRef={finishRef}
                mountOnEnter
                unmountOnExit>

                    <div className={'background'} ref={finishRef}>
                        <FinishComponent setPage={setPage}/>
                    </div>

                </CSSTransition>
                {currentScene.background}
                <div className={'cookies'}>
                    {cookies.map((data, index) => {
                        return (
                            <div
                                id={`id${index}`}
                                className={'cookies_item'}
                                key={index}
                                data-value={data.number}
                                style={
                                    {
                                        top: cookiesPosition[index]?.yPos,
                                        left: cookiesPosition[index]?.xPos
                                    }}
                            >
                                <img src={data.picture} alt={`pic${index}`} style={{pointerEvents: 'none'}}/>
                                <span style={{pointerEvents: 'none'}}>{data.number}</span>
                            </div>
                        )
                    })}
                    {check ? <div className={'directionBlock'}>
                        <p>По возрастанию</p>
                        <img src={direction} alt={'direction'}/>
                    </div> : <div className={'directionBlockRight'}>
                        <img src={direction} alt={'direction'}/>
                        <p>По убыванию</p>
                    </div>}
                </div>
                <div className={'emptyBlockWrapper'} ref={wrapperRef}>
                    <img src={currentScene.emptySlots} alt={'emptySlots'}/>
                    <div className={"emptyBlock"} ref={emptyBlock}>
                        {Array.from(Array(storage.amount)).map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    data-value={reversedArr[index]?.number}
                                    id={`emptyId`}
                                    className={"emptyBlock_item"}
                                ></div>
                            )
                        })}
                    </div>
                </div>


            </div>


    );
}

export default GameComponent;