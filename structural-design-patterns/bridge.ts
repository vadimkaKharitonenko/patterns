/*
* Bridge - это структурный шаблон проектирования, который позволяет разбить большой
* класс или набор тесно связанных классов на две отдельные иерархии - абстракцию и
* реализацию - которые могут разрабатываться независимо друг от друга.
*
* Применимость:
*
* Используйте шаблон Bridge, если вы хотите разделить и организовать монолитный класс,
* который имеет несколько вариантов некоторых функций (например, если класс может работать
* с различными серверами баз данных).
*
* Используйте шаблон, когда вам нужно расширить класс в нескольких ортогональных
* (независимых) измерениях.
*
* Используйте Bridge, если вам нужно переключать реализации во время выполнения.
*
* */

class PlatformAbstraction {
  protected implementation: PlatformImplementation;

  constructor(implementation: PlatformImplementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends PlatformAbstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with: ${result}`;
  }
}

interface PlatformImplementation {
  operationImplementation(): string;
}

class MacImplementation implements PlatformImplementation {
  operationImplementation(): string {
    return 'This is mac platform';
  }
}

class WindowsImplementation implements PlatformImplementation {
  operationImplementation(): string {
    return 'This is windows platform';
  }
}

const macPlatformImplementation = new MacImplementation();
const macPlatformAbstraction = new PlatformAbstraction(macPlatformImplementation);

console.log(macPlatformAbstraction.operation());

const wPlatformImplementation = new WindowsImplementation();
const wPlatformAbstraction = new PlatformAbstraction(wPlatformImplementation);

console.log(wPlatformAbstraction.operation());

const wPlatformExtendedAbstraction = new ExtendedAbstraction(wPlatformImplementation);

console.log(wPlatformExtendedAbstraction.operation());
