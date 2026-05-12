import { Mail, Heart } from 'lucide-react'
import InstagramIcon from './InstagramIcon'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl mb-2">Flor de Samambaia</h3>
            <p className="text-background/60 text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/sambaflordesamambaia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="mailto:sambaflordesamambaia@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-background/60 text-sm">
            <span>Desenvolvido com</span>
            <Heart size={14} className="text-destructive fill-destructive" />
            <span>por</span>
            <a
              href="https://www.linkedin.com/in/fernandarebelatto/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-background transition-colors underline underline-offset-2"
            >
              Fernanda Rebelatto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
