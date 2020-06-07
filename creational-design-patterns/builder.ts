/*
* Builder - это шаблон проектирования, который позволяет шаг за шагом создавать сложные
* объекты. Шаблон позволяет создавать различные типы и представления объекта, используя
* один и тот же строительный код.
*
* Применимость:
*
* Используйте шаблон Builder, чтобы избавиться от «телескопического конструктора».
*
* Используйте шаблон Builder, когда вы хотите, чтобы ваш код мог создавать различные представления какого-либо
* продукта (например, каменные и деревянные дома).
*
* Используйте Builder для создания составных деревьев или других сложных объектов.
* */

interface Builder {
  buildWalls()
  buildDoors()
  buildWindows()
  buildRoof()
  buildGarage()
  getResult()
}

class HouseBuilder implements Builder {
  private house: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }

  buildWalls() {
    this.house.parts.push('walls');
  }

  buildWindows() {
    this.house.parts.push('windows');
  }

  buildGarage() {
    this.house.parts.push('garage');
  }

  buildDoors() {
    this.house.parts.push('doors');
  }

  buildRoof() {
    this.house.parts.push('roof');
  }

  getResult() {
    const result = this.house;
    this.reset();
    return result;
  }
}

class House {
  public parts: string[] = [];

  public getParts(): void {
    return console.log(this.parts);
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableHouse(): void {
    return (() => {
      this.builder.buildDoors();
      this.builder.buildRoof();
      this.builder.buildWalls();
    })()
  }

  public buildFullFeaturedProduct(): void {
    return (() => {
      this.builder.buildWalls();
      this.builder.buildRoof();
      this.builder.buildDoors();
      this.builder.buildGarage();
      this.builder.buildWindows();
    })()
  }
}

const houseBuilder = new HouseBuilder();
const director = new Director();

director.setBuilder(houseBuilder);
director.buildFullFeaturedProduct();

houseBuilder.getResult().getParts();

director.buildMinimalViableHouse();
houseBuilder.getResult().getParts();

houseBuilder.buildGarage();
houseBuilder.buildRoof();

houseBuilder.getResult().getParts();