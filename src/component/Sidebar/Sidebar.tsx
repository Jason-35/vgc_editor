import { useAppSelector } from "../../store/storeHook";

function Sidebar() {

  const hide = useAppSelector(state => state.sidebarDisplay.hide)

  const openSidebar = <div className="bg-blue-500 w-[232px]">Sidebar</div>;
  return (
    <>
      { hide ? <></> : openSidebar }
    </>
  )
}

export default Sidebar