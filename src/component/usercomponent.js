import {useUserName} from './context'

const usercomponent = () => {

    const {user} = useUserName()

    return (
        <div>
            <h1>Hello, What is your name?{user}</h1>
        </div>
    )
}

export default usercomponent;