import { useEffect } from "react";
import { useAppDispatch } from "../store/storeHook";
import { close } from "../component/Command/commandSlice"

function ClickHandler() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        document.addEventListener("click", clickOutside)

        return () => {
            document.removeEventListener("click", clickOutside)
        }
    })

    const clickOutside = (event: Event) => {
        let html = event.target as HTMLDivElement
        if (!html.className.includes("command")) {
            dispatch(close())
        }
    }
}

export default ClickHandler