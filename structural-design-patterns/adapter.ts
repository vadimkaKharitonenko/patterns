/*
* Адаптер - это структурный шаблон проектирования, позволяющий взаимодействовать
* объектам с несовместимыми интерфейсами.
*
* Применимость:
*
* Используйте класс Adapter, если вы хотите использовать какой-то существующий
* класс, но его интерфейс не совместим с остальным кодом.
*
* Используйте шаблон, если вы хотите повторно использовать несколько существующих
* подклассов, в которых отсутствуют некоторые общие функции, которые нельзя добавить
* в суперкласс.
*
* */

class Target {
  public request(): string {
    return 'Target: The default target\'s behavior.';
  }
}

class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);