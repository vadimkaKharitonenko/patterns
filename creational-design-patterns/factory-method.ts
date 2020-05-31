/*
* Шаблон Factory Method предлагает заменить прямые вызовы конструирования объекта (используя new оператор)
* вызовами специального заводского метода. Не волнуйтесь: объекты по-прежнему создаются с помощью new оператора,
* но он вызывается из фабричного метода. Объекты, возвращаемые фабричным методом, часто называют «продуктами».
*
* Применимость:
*
* Используйте фабричный метод, если вы заранее не знаете точных типов и зависимостей объектов,
* с которыми должен работать ваш код.
*
* Используйте фабричный метод, если вы хотите предоставить пользователям вашей библиотеки или
* фреймворка способ расширения своих внутренних компонентов.
*
* Используйте фабричный метод, когда вы хотите сохранить системные ресурсы, повторно используя
* существующие объекты, вместо того, чтобы каждый раз перестраивать их.
*/

// abstract example

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());

// example with trucks and ships

interface Vehicle {
    deliver: () => void
}

class Truck implements Vehicle {
    _name = '';

    constructor(name: string) {
        this._name = name;
    }

    public deliver(): void {
        console.log(`${this._name} delivery`);
    }
}

class Ship implements Vehicle {
    _name = '';

    constructor(name: string) {
        this._name = name;
    }

    public deliver(): void {
        console.log(`${this._name} delivery`);
    }
}

abstract class Logistics {
    public abstract factoryMethod(name: string): Vehicle;

    public createTransport(name: string): Vehicle {
        const vehicle = this.factoryMethod(name);
        return vehicle;
    }
}

class RoadLogistics extends Logistics {
    public factoryMethod(name: string): Vehicle {
        return new Truck(name);
    }
}

class SeaLogistics extends Logistics {
    public factoryMethod(name: string): Vehicle {
        return new Ship(name);
    }
}

const roadLogistics = new RoadLogistics();
const seaLogistics = new SeaLogistics();

const truck1 = roadLogistics.createTransport('truck1');
const truck2 = roadLogistics.createTransport('truck2');
const ship1 = seaLogistics.createTransport('sea1');
const ship2 = seaLogistics.createTransport('sea2');

console.log(truck1, truck2, ship1, ship2);
truck1.deliver();
ship2.deliver();