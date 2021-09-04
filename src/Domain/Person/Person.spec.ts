import { Person } from "./Person"

describe('Test', () => {
  test('create person and get name', () => {
    const sut = new Person('Any Name', 21, 'any_email@email.com')

    expect(sut.getName()).toBe('Any Name')
  })

  test('create person and get age', () => {
    const sut = new Person('Any Name', 21, 'any_email@email.com')

    expect(sut.getAge()).toBe(21)
  })

  test('create person and get email', () => {
    const sut = new Person('Any Name', 21, 'any_email@email.com')

    expect(sut.getEmail()).toBe('any_email@email.com')
  })
})
