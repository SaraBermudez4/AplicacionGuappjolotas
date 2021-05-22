import Descripcion from '../containers/descripcion/Descripcion'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


const Styled = styled.div`
    //height: 100vh;
    background-color:#F2F2F2;
`

function App() {
  return (
    <Styled>
      <Descripcion/>
    </Styled>
  );
}

export default App;
