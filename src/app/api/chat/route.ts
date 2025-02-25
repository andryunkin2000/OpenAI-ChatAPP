import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true // Add this for client-side usage
})

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' },
      { status: 500 }
    )
  }

  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 500
    })

    const aiResponse = completion.choices[0].message.content

    if (!aiResponse) {
      throw new Error('No response from OpenAI')
    }

    return NextResponse.json({ message: aiResponse })
  } catch (error: any) {
    console.error('OpenAI API Error:', error)
    return NextResponse.json(
      { 
        error: error?.message || 'Failed to process the request',
        details: error?.response?.data || error
      },
      { status: 500 }
    )
  }
}