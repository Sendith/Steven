import './App.css'
import './components/Header'
import Header from './components/Header'
import About from './components/About'
import Tail from './components/Tail'
import Skills from './components/Skills'
import Projects from './components/Projects'
import $ from './components/utils/jquery'
function App() {

  return (
    <body>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Tail></Tail>
     
    </body>
  )
}

export default App
