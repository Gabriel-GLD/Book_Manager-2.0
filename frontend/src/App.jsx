import './App.css';
import Header from './components/Header';
import Quite from './components/Quite';
import Emprestimos from './pages/Emprestimos';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-300">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Quite />} />
          <Route path="/emprestimos" element={<Emprestimos />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
