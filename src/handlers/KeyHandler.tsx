import { useEffect } from "react"
import { useAppDispatch } from "../store/storeHook"
import { open, close } from "../component/Command/commandSlice"

// File is used for handling key presses
function KeyHandler() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        document.addEventListener("keyup", handleKeyPress)

        return () => {
            document.removeEventListener("keyup", handleKeyPress)
        }
    })

    const handleKeyPress = (event: KeyboardEvent) => {
        // TODO: Handle keyevents

        if (event.ctrlKey && event.shiftKey) {
            dispatch(open())
        }

        if (event.key === "Escape") {
            dispatch(close())
        }
    }

    return (<></>)
}

export default KeyHandler