/*
* Абстрактная фабрика - это шаблон проектирования, позволяющий создавать семейства
* связанных объектов без указания их конкретных классов.
*
* Применимость:
*
* Используйте Abstract Factory, когда ваш код должен работать с различными
* семействами связанных продуктов, но вы не хотите, чтобы он зависел от конкретных
* классов этих продуктов - они могут быть неизвестны заранее или вы просто хотите
* учесть возможность расширения в будущем.
*
* */

interface Chair {
  name: string
}

interface Sofa {
  name: string
}

interface CoffeeTable {
  name: string
}

interface FurnitureFactory {
  createChair(): Chair
  createSofa(): Sofa
  createCoffeeTable(): CoffeeTable
}

class ModernFurnitureFactory implements FurnitureFactory{
  createChair(): Chair {
    return new ModernChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

class ArtDecoFurnitureFactory implements FurnitureFactory {
  createSofa(): Sofa {
    return new ArtDecoSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new ArtDecoCoffeeTable();
  }

  createChair(): Chair {
    return new ArtDecoChair();
  }
}

class ModernChair implements Chair {
  name = 'Modern Chair';
}

class ModernCoffeeTable implements CoffeeTable {
  name = 'Modern CoffeeTable';
}

class ModernSofa implements Sofa {
  name = 'Modern Sofa';
}

class VictorianChair implements Chair {
  name = 'Victorian Chair';
}

class VictorianCoffeeTable implements CoffeeTable {
  name = 'Victorian Coffee Table';
}

class VictorianSofa implements Sofa {
  name = 'Victorian Sofa';
}

class ArtDecoChair implements Chair {
  name = 'Art Deco Chair';
}

class ArtDecoCoffeeTable implements CoffeeTable {
  name = 'Art Deco Coffee Table';
}

class ArtDecoSofa implements Sofa {
  name = 'Art Deco Sofa';
}

const modernFactory = new ModernFurnitureFactory();
const artDecoFactory = new ArtDecoFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();

console.log(modernFactory.createChair().name);
console.log(artDecoFactory.createCoffeeTable().name);
console.log(victorianFactory.createSofa().name);