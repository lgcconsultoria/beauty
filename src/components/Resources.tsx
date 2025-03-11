export default function Resources() {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-custom hover-scale">
            <div className="text-pink-500 text-4xl mb-4">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Agendamento Automático</h3>
            <p className="text-gray-600">
              Permita que seus clientes agendem procedimentos diretamente pelo WhatsApp,
              sem intervenção humana.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-custom hover-scale">
            <div className="text-pink-500 text-4xl mb-4">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Atendimento 24/7</h3>
            <p className="text-gray-600">
              Responda dúvidas e forneça informações a qualquer hora do dia ou da noite,
              mesmo quando sua equipe não está disponível.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-custom hover-scale">
            <div className="text-pink-500 text-4xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Análise de Dados</h3>
            <p className="text-gray-600">
              Obtenha insights valiosos sobre as preferências dos clientes e otimize suas
              estratégias de marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 