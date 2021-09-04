import { Person } from "./Person"

describe('Test', () => {
  test('whatever test', () => {
    expect(1 + 1).toBe(2)
  })

  test('create person', () => {
    const sut = new Person('Any Name')

    expect(sut.getName()).toBe('Any Name')
  })
})
