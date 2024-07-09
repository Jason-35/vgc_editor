import Tabbar from './component/Tabbar/Tabbar'
import Sidebar from "./component/Sidebar/Sidebar"
import Editor from "./component/Editor/Editor"
import Command from "./component/Command/Command"
import KeyHandler from './handlers/KeyHandler'
import ClickHandler from './handlers/ClickHandler'
import { useAppSelector } from './store/storeHook'


function Vgc() {

  KeyHandler()
  ClickHandler()
  const commandDisplay = useAppSelector(state => state.commandDisplay.isOpen)

  return (
    <div className='h-screen bg-green-300 flex'>
          <Sidebar />
        <div className='flex flex-col flex-1'>
          <Tabbar />
          <Editor />
        </div>
        { commandDisplay ? <Command /> : <></> }
    </div>
  )
}

export default Vgc