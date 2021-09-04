import { Person } from "./Person"

describe('Test', () => {
  test('create person', () => {
    const sut = new Person('Any Name')

    expect(sut.getName()).toBe('Any Name')
  })
})
