# AI Chat Application

A modern chat application built with Next.js 13, Tailwind CSS, and OpenAI integration.

## Features

- Real-time chat interface
- AI-powered responses using OpenAI's GPT-3.5
- Modern UI with Shadcn components
- Responsive design
- Toast notifications for error handling

## Prerequisites

- Node.js 16.8 or later
- OpenAI API key

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── chat-interface.tsx
│   ├── message-list.tsx
│   └── ui/
│       ├── button.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
└── types/
    └── chat.ts
```

## Testing

Run the test suite:

```bash
npm test
```

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [OpenAI API](https://openai.com/)