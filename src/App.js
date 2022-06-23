import './App.css';
import SideMenu from './components/SideMenu/index.tsx';
import PlayMenu from './components/PlayMenu/index.tsx';
import {useState} from 'react'
import {useRouter} from './router/index.tsx'
import Files from './components/Files/index.tsx'
import Settings from './components/Settings/index.tsx'


function App() {
  // let [page,setPage] = useState('main')
  // let [path,setPath] = useState(window.location.hash?.split('#')[1]??'/')
  // function goto(v){
  //   window.location.hash=v
  //   setPath(v)
  // }
  let [path, goto, Router]=useRouter();
  return (
    <Router value={{path,goto}}>
    <div className="App flex h-screen bg-neutral-600">
      <SideMenu onOpen={goto}/>
      {path=='/' && <PlayMenu/>}
      {path=='/files' && <Files/>}
      {path=='/settings' && <Settings/>}
    </div>
    </Router>
  );
}

export default App;
