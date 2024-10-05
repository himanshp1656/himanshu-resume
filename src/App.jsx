import { useEffect, useState } from 'react'
import './App.css'
import data from "./data.json"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Experiences from './components/Experiences'
import Footer from './components/Footer'

function App() {
  const [thememode, setThememode] = useState('dark')

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <>
      <section>
        <div className="min-h-[100vh] bg-[#fafafa] dark:bg-[#212121] dark:text-white font-open-sans ">
          <Navbar thememode={thememode} setThememode={setThememode} />
          <div className="w-11/12 mx-auto font-open-sans h-full">
            <Hero />
            <Projects />
            <Tech data={data.techStack} />
            <Experiences data={data.experience} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default App
