import { useEffect } from "react";
import { useAppDispatch } from "../store/storeHook";
import { close } from "../component/Command/commandSlice"

function ClickHandler() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    })

    const handleClick = (event: Event) => {
        let html = event.target as HTMLDivElement
        if (!html.className.includes("command")) {
            dispatch(close())
        }
    }

    return (<></>)
}

export default ClickHandler