interface Product {
    operation(): string;
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): void {
        // Call to create a Product object
        this.factoryMethod();
    }
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return 'Result of ConcreteProduct1';
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

function clientCode(creator: Creator) {
    creator.someOperation();
}

clientCode(new ConcreteCreator1());
