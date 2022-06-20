import './App.css';
import SideMenu from './components/SideMenu/index.tsx';
import PlayMenu from './components/PlayMenu/index.tsx';
import {useState} from 'react'
import {RouterContext} from './router/index.ts'

function App() {
  let [page,setPage] = useState('main')
  function open(v){
    setPage(v)
  }
  let [path,setPath] = useState(window.location.hash?.split('#')[1]??'/')
  function goto(v){
    window.location.hash=v
    setPath(v)
  }
  return (
    <RouterContext.Provider value={{path,goto}}>
    <div className="App flex h-screen bg-neutral-600">
      <SideMenu onOpen={open}/>
      {page=='main' && <PlayMenu/>}
    </div>
    </RouterContext.Provider>
  );
}

export default App;
