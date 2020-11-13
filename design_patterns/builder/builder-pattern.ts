export class House {
    address: string;
    floorNumber: number;
    haveParking: boolean;
    haveGarden: boolean;

    constructor(houseBuilder: HouseBuilder) {
        this.address = houseBuilder.address;
        this.floorNumber = houseBuilder.floorNumber;
        this.haveParking = houseBuilder.haveParking;
        this.haveGarden = houseBuilder.haveGarden;
    }
}

export class HouseBuilder {
    private readonly _address: string;
    private _floorNumber: number;
    private _haveParking = false;
    private _haveGarden = false;

    constructor(address: string) {
        this._address = address;
    }

    get address(): string {
        return this._address;
    }

    get floorNumber(): number {
        return this._floorNumber;
    }

    get haveParking(): boolean {
        return this._haveParking;
    }

    get haveGarden(): boolean {
        return this._haveGarden;
    }

    setFloor(floor: number): this {
        this._floorNumber = floor;
        return this;
    }

    addParking(): this {
        this._haveParking = true;
        return this;
    }

    addGarden(): this {
        this._haveGarden = true;
        return this;
    }

    build(): House {
        return new House(this);
    }
}

const newHouse: House = new HouseBuilder('123 York Street')
    .addGarden()
    .addParking()
    .setFloor(2)
    .build();

