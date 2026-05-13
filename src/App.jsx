import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './components/sections/Hero'
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
      <Hero />
      <Sobre />
      <Integrantes />
      <Trajetoria />
      <Clipping />
      <Entrevista />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
