// server/api/guestbook.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage('db')
  const method = event.method

  // 1. Handle GET request: Return all guestbook messages
  if (method === 'GET') {
    const messages = await storage.getItem<any[]>('guestbook-data') || []
    return messages
  }

  // 2. Handle POST request: Save a new message
  if (method === 'POST') {
    const body = await readBody(event)
    
    if (!body.name || !body.message) {
      throw createError({ statusCode: 400, statusMessage: 'Name and message are required.' })
    }

    const currentMessages = await storage.getItem<any[]>('guestbook-data') || []
    
    const newMessage = {
      id: Date.now(),
      name: body.name,
      message: body.message,
      date: new Date().toLocaleDateString('en-SG', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      })
    }
    
    // Add new message to the top of the list
    const updatedMessages = [newMessage, ...currentMessages]
    await storage.setItem('guestbook-data', updatedMessages)

    return { success: true }
  }
})
