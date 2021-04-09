import {createContext, useContext} from 'react'


const UserName =  createContext()

const UserNameProvider = ({prop}) => {

    const user = 'Philia Hammond';
   
    return (
        <UserName.Provider value={{user}}>
            {prop.children}
        </UserName.Provider>
    )
}



const useUserName = ()=> useContext(UserName)

export {useUserName, UserNameProvider}