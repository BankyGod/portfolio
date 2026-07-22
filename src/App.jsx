import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router'
import { AnimatePresence } from 'motion/react'
import { useEffect, useRef } from 'react'
import Home from './pages/Home'
import ProjectDetail from './components/ProjectDetail'
import PageTransition from './components/PageTransition'

function ScrollManager() {
  const { pathname, hash, search } = useLocation()
  const navigate = useNavigate()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false

      // Always open on the hero after a fresh load/refresh
      if (hash) {
        navigate(`${pathname}${search}`, { replace: true })
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    if (hash) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash, search, navigate])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
