// server/api/count.ts
export default defineEventHandler(async () => {
  const storage = useStorage('db')
  const currentCount = (await storage.getItem<number>('visitorCount')) || 0
  const newCount = currentCount + 1
  
  await storage.setItem('visitorCount', newCount)
  
  return {
    count: newCount
  }
})
