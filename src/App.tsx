import { BrowserRouter, Route, Routes } from 'react-router'
import SiteLayout from '@/components/layout/SiteLayout'
import HomePage from '@/pages/home/HomePage'
import ProjectsPage from '@/pages/projects/ProjectsPage'
import ContactPage from '@/pages/contact/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/projects" element={<ProjectsPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
