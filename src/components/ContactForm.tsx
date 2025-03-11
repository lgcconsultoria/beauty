'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)

    const form = e.currentTarget
    const formData = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefone: (form.elements.namedItem('telefone') as HTMLInputElement).value,
      mensagem: (form.elements.namedItem('mensagem') as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' })
        form.reset()
      } else {
        throw new Error(data.message || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro:', error)
      setFeedback({ type: 'error', message: 'Erro ao enviar mensagem. Tente novamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Transforme sua clínica hoje mesmo
          </h2>
          <form className="space-y-6 text-pink-500" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="telefone" className="block text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {feedback && (
              <div className="text-center">
                <p className={`font-semibold ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {feedback.message}
                </p>
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition hover-scale disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar demonstração'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 