import { useAppSelector } from "../../store/storeHook"

function Command() {

  const commandList = useAppSelector(state => state.commandDisplay.commandList)
  let currentHover = useAppSelector(state => state.commandDisplay.currentHover)

  const handleCommand = (event: React.MouseEvent<HTMLElement>) => {
    let cmd = event.target as HTMLLIElement
    console.log(cmd.classList[0])
  }
  
  return (
    <div className="command fixed w-2/5 max-h-[50%] flex flex-col bg-orange-400 left-[50%] translate-x-[-50%] top-16 px-6 py-6">
        <div className="command bg-slate-200 w-full h-10 flex border-blue-700 border-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            <input autoFocus type="text" className="command w-full focus:outline-none pl-2" />
        </div>
        <nav className="list-none overflow-scroll command overflow-x-hidden overflow-y-auto">
          { Object.keys(commandList).map((command: string, index) => (
            <li 
            key={command}
            onClick={handleCommand} 
            className={`${command} command ${index === currentHover ? "bg-green-500" : ""} p-1 hover:cursor-pointer hover:bg-green-300 flex list-none rounded-md pl-3`}>
            <span className={`${command} command inline-block w-2/3`}>{ command }</span>
            <span className={`${command} command text-right flex-1`}>{ commandList[command as keyof typeof commandList] as string } {currentHover}</span>
            </li>
          )) }
        </nav>
    </div>
  )
}

export default Command