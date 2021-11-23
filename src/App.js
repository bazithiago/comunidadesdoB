import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Home } from './components/Home'
import { Community } from './components/Community'

const screenStates = {
  HOME: 'HOME',
  COMMUNITY: 'COMMUNITY'
}


function App() { 
  const [screenState, setScreenState] = useState(screenStates.HOME)
  
  function goToNextScreen() {
    setScreenState(screenStates.COMMUNITY)
  }

  function goToPreviousScreen() {
    localStorage.clear();
    setScreenState(screenStates.HOME)
  }

  return (
    <>
      <GlobalStyle />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/community' element={<Community/>} />
        </Routes>
      </BrowserRouter> */}
      {screenState === screenStates.HOME && <Home nextScreen={goToNextScreen}/>}
      {screenState === screenStates.COMMUNITY && <Community previousScreen={goToPreviousScreen}/>}
    </>
  );
}

export default App;
