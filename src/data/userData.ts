export const mockUsers = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  phone: `0901234${index.toString().padStart(3, '0')}`,
  class: `Class ${Math.floor(Math.random() * 5) + 1}`
}));