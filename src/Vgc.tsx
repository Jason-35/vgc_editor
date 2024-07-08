import Tabbar from './component/Tabbar/Tabbar'
import Sidebar from "./component/Sidebar/Sidebar"
import Editor from "./component/Editor/Editor"
import Command from "./component/Command/Command"
import KeyHandler from './handlers/KeyHandler'
import ClickHandler from './handlers/ClickHandler'
import { useAppSelector } from './store/storeHook'


function Vgc() {

  const commandDisplay = useAppSelector(state => state.commandDisplay.isOpen)

  return (
    <div className='h-screen bg-green-300 grid grid-cols-[15%_85%] grid-rows-[24px_auto]'>
        <Tabbar />
        <Sidebar />
        <Editor />
        <KeyHandler />
        <ClickHandler />
        { commandDisplay ? <Command /> : <></> }
    </div>
  )
}

export default Vgc