import React from 'react'
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';
const LoginR = () => {

    const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 4000)
  }, [])

    return (
        <React.Fragment>
      {
        loading ?
          <Entrada />
          :
          <ChakraProvider>
            <UserCheck />
          </ChakraProvider>
        // {/* <BrowserRouter>
        //   <Switch>
        //     <ChakraProvider>
        //       <Route path='/' component={Login} />
        //      <Route exact path="/" component={Home} />
        //     </ChakraProvider>
        //   </Switch>
        // </BrowserRouter> */}
      }
    </React.Fragment>
    )
}

export default LoginR
