export class Person {
  private readonly name: string
  private readonly age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  public getName(): string {
    return this.name
  }

  public getAge(): number {
    return this.age
  }
}