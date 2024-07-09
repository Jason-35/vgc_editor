import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/storeHook"
import { open, close, hoverDown, hoverUp } from "../component/Command/commandSlice"
import { toggleHide } from "../component/Sidebar/sidebarSlice"

// File is used for handling key presses
function KeyHandler() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        document.addEventListener("keyup", handleKeyPress)

        return () => {
            document.removeEventListener("keyup", handleKeyPress)
        }
    })

    let cmdExecute = useAppSelector(state => state.commandDisplay.executeCommand)
    const handleKeyPress = (event: KeyboardEvent) => {
        // TODO: Handle keyevents
        console.log(event.key)

        if (event.key === "ArrowDown") {
            dispatch(hoverDown())
        }

        if (event.key === "ArrowUp") {
            dispatch(hoverUp())
        }

        if (event.key === "Enter") {
            console.log(cmdExecute)
        }

        if (event.ctrlKey && event.shiftKey) {
            dispatch(open())
        }

        if (event.key === "Escape") {
            dispatch(close())
        }

        if (event.key.toLowerCase() === "b") {
            console.log("hide sidebar!")
            dispatch(toggleHide())
        }
    }
}

export default KeyHandler
