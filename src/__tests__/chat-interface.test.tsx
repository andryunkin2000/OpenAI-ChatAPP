import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ChatInterface } from '@/components/chat-interface'

// Mock the fetch function
global.fetch = jest.fn()

describe('ChatInterface', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the chat interface', () => {
    render(<ChatInterface />)
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('handles user input and submission', async () => {
    // Mock successful API response
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'AI response' }),
    })

    render(<ChatInterface />)

    const input = screen.getByPlaceholderText('Type your message...')
    const sendButton = screen.getByRole('button', { name: /send/i })

    fireEvent.change(input, { target: { value: 'Hello AI' } })
    fireEvent.click(sendButton)

    await waitFor(() => {
      expect(input).toHaveValue('')
    })

    expect(global.fetch).toHaveBeenCalledWith('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello AI' }),
    })
  })

  it('handles API errors', async () => {
    // Mock failed API response
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'))

    render(<ChatInterface />)

    const input = screen.getByPlaceholderText('Type your message...')
    const sendButton = screen.getByRole('button', { name: /send/i })

    fireEvent.change(input, { target: { value: 'Hello AI' } })
    fireEvent.click(sendButton)

    await waitFor(() => {
      expect(screen.getByText(/Failed to get AI response/i)).toBeInTheDocument()
    })
  })
})