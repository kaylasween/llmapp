// ./app/page.js
'use client'

import { useChat } from 'ai/react'
import styles from './page.module.css'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <main className={styles.main}>
      <h1>Chat AI example</h1>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </main>
  )
}
