'use client'

import { ChatInterface } from '@/components/chat-interface'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-8">AI Chat App</h1>
      <div className="w-full max-w-2xl">
        <ChatInterface />
      </div>
    </main>
  )
}