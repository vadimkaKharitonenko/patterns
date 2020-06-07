/*
* Singleton - это шаблон проектирования, который позволяет вам гарантировать,
* что у класса есть только один экземпляр, при этом предоставляя глобальную точку
* доступа к этому экземпляру.
*
* Применимость:
*
* Используйте шаблон Singleton, когда класс в вашей программе должен иметь только
* один экземпляр, доступный для всех клиентов; например, один объект базы данных,
* совместно используемый различными частями программы.
*
* Используйте шаблон Singleton, когда вам нужен более строгий контроль
* над глобальными переменными.
*
* */

class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {

  }
}

/**
 * The client code.
 */
function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();