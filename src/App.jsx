import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sobre from './components/sections/Sobre'
import Integrantes from './components/sections/Integrantes'
import Trajetoria from './components/sections/Trajetoria'
import Clipping from './components/sections/Clipping'
import Entrevista from './components/sections/Entrevista'
import Contato from './components/sections/Contato'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Integrantes />
      <Trajetoria />
      <Clipping />
      <Entrevista />
      <Contato />
      <Footer />
    </>
  )
}

export default App
