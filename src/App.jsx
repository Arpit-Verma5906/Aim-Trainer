import { useState, useEffect } from 'react'
import LandingPage from './landing-page.jsx'
import GamePage from './game.jsx'

function App() {

  const [showLandingPage, setShowLandingPage] = useState(true)

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.body.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <main style={{ userSelect: 'none' }} className='min-w-screen min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-black'>
      {showLandingPage && <LandingPage onClose={() => setShowLandingPage(false)}/>}
      {!showLandingPage && <GamePage />}
    </main>
  )
}

export default App