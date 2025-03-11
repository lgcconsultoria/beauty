import Image from 'next/image'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefícios para seu Negócio</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8"
              alt="Benefícios do BeautyBot"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-pink-500 mr-4">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Aumento de Produtividade</h3>
                  <p className="text-gray-600">
                    Libere sua equipe para focar no que realmente importa:
                    proporcionar experiências excepcionais aos clientes presentes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-pink-500 mr-4">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Redução de Faltas</h3>
                  <p className="text-gray-600">
                    Lembretes automáticos reduzem significativamente o número de
                    faltas e cancelamentos de última hora.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="text-pink-500 mr-4">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Fidelização de Clientes</h3>
                  <p className="text-gray-600">
                    Mantenha contato constante com seus clientes, enviando
                    promoções personalizadas e dicas de beleza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 