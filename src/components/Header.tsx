'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-pink-500">Beauty</span>
        </div>
        <div className={`md:flex space-x-8 ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} md:relative md:top-0 md:shadow-none`}>
          <Link href="#inicio" className="text-gray-700 hover:text-pink-500 transition block md:inline">Início</Link>
          <Link href="#recursos" className="text-gray-700 hover:text-pink-500 transition block md:inline">Recursos</Link>
          <Link href="#beneficios" className="text-gray-700 hover:text-pink-500 transition block md:inline">Benefícios</Link>
          <Link href="#depoimentos" className="text-gray-700 hover:text-pink-500 transition block md:inline">Depoimentos</Link>
          <Link href="#contato" className="text-gray-700 hover:text-pink-500 transition block md:inline">Contato</Link>
        </div>
        <div className="md:hidden">
          <button 
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
    </header>
  )
} 