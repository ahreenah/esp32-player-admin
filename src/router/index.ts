import {createContext, useContext } from 'react'

export const RouterContext = createContext({path:'/a'})
export const useRouter = ()=>useContext(RouterContext) 