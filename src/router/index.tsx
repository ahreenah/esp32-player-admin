import {createContext, useContext, useState } from 'react'

export const RouterContext = createContext({path:'/a'})
export const useRoute = ()=>useContext(RouterContext) 

export function useRouter(){
    let [path,setPath] = useState(window.location.hash?.split('#')[1]??'/')
    function goto(v){
      window.location.hash=v
      setPath(v)
    }
    let par = {path, goto}
    let Provider = ({children}) => (<RouterContext.Provider value={par}>
        {children}
      </RouterContext.Provider>)
    return [path, goto, Provider]
  }
  