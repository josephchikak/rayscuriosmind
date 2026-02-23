import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Journal from './Journal'
import ProjectsPage from './components/ProjectsPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Journal />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
