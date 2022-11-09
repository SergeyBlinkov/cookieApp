import {allScenes} from "./DataAssets";
import {useMemo} from "react";


type Cookies = {
    number: number,
    picture: string
}

type Storage = {
    type: string,
    amount: number,
    values: number
}

let cookies: Cookies[] = []
const currentScene = allScenes[Math.round(Math.random())]
const FillComponent = (storage: Storage) => {


    useMemo(() => {
        if (cookies.length === storage.amount) return
        for (let i = 0; i < +storage.amount; i++) {
            debugger

            let check = true
            const value = Math.floor(Math.random() * (+storage.values - 1))
            let number = 1 + value
            while (check) {
                check = false
                for (let k = 0; k < i; k++) {
                    if (number === cookies[k]?.number) {
                        check = true;
                        number++
                        break;
                    }
                }
            }
            cookies.push({
                number,
                picture: currentScene.items[Math.floor(Math.random() * currentScene.items.length)]
            })
        }
    }, [storage.amount, storage.values])

    return {cookies, currentScene}
};
export default FillComponent;

