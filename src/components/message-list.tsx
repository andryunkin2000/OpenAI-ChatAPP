import { Message } from '@/types/chat'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-start space-x-2 ${
            message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <Avatar className={message.role === 'user' ? 'ml-2' : 'mr-2'}>
            <AvatarFallback>
              {message.role === 'user' ? 'ME' : 'AI'}
            </AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-4 max-w-[80%] ${
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  )
}