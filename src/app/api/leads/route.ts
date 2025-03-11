import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, mensagem } = body

    const lead = await prisma.lead.create({
      data: {
        nome,
        email,
        telefone,
        mensagem,
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Dados salvos com sucesso!',
      data: lead 
    })
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao salvar dados',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 