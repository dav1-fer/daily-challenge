import './index.css';
import DateLabel from './Components/DateLabel.jsx';
import ChallengeApp from './Components/ChallengeApp.jsx';


function App() {


  return (
    <main className='w-screen h-full flex flex-col justify-center items-center gap-4'>
      <DateLabel/>
      <h1>🔥Daily Challenge</h1>
      <ChallengeApp />
      
    </main>
  )
}

export default App
