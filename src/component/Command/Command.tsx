function Command() {
  return (
    <div className="command fixed w-2/5 max-h-[50%] flex flex-col bg-orange-400 left-[50%] translate-x-[-50%] top-16 px-6 py-6">
        <div className="command bg-slate-200 w-full h-10 flex border-blue-700 border-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            <input type="text" className="command w-full focus:outline-none pl-2" />
        </div>
        <nav className="list-none">
        </nav>
    </div>
  )
}

export default Command