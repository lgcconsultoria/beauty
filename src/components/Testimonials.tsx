import Image from 'next/image'

const testimonials = [
  {
    name: 'Ana Oliveira',
    role: 'Proprietária da Clínica Beleza Natural',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: 'O BeautyBot transformou completamente o fluxo de trabalho da minha clínica. Reduzimos custos com recepção e aumentamos os agendamentos em 30%.',
  },
  {
    name: 'Carlos Santos',
    role: 'Gerente do Espaço Estética Avançada',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Meus clientes adoram a praticidade de agendar pelo WhatsApp a qualquer hora. As confirmações automáticas reduziram nossas faltas em mais de 50%.',
  },
  {
    name: 'Mariana Costa',
    role: 'Diretora da Estética Bem Estar',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'O suporte é excelente e o sistema é muito intuitivo. Conseguimos personalizar o bot para atender exatamente às necessidades da nossa clínica.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-pink-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 