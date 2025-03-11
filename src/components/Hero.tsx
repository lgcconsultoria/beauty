import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="inicio" className="gradient-bg pt-28 pb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Transforme o atendimento da sua clínica de estética
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8">
            O BeautyBot é um assistente virtual que automatiza agendamentos, responde dúvidas e fideliza seus
            clientes 24 horas por dia, 7 dias por semana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#contato"
              className="bg-white text-pink-500 hover:bg-gray-100 py-3 px-8 rounded-full font-semibold shadow-lg hover-scale"
            >
              Começar agora
            </Link>
            <Link
              href="#demonstracao"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-500 py-3 px-8 rounded-full font-semibold transition-colors duration-300"
            >
              Ver demonstração
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="BeautyBot em ação"
            width={800}
            height={600}
            className="rounded-lg shadow-xl hover-scale"
          />
        </div>
      </div>
    </section>
  )
} 