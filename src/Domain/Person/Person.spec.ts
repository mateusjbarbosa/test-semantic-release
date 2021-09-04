import { Person } from "./Person"

describe('Test', () => {
  test('create person and get name', () => {
    const sut = new Person('Any Name', 21)

    expect(sut.getName()).toBe('Any Name')
  })

  test('create person and get age', () => {
    const sut = new Person('Any Name', 21)

    expect(sut.getAge()).toBe(21)
  })
})
