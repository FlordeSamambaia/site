import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre o Flor de Samambaia.'

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  )
}

export default WhatsAppButton
