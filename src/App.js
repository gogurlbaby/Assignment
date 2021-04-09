import usercomponent from './component/usercomponent';
import {useUserName} from './context';

function App() {
  const {user} = useUserName();

  return(
  <Usercomponent/>
  )
}

export default App;
