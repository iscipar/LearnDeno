let heroId = 1;

function generateHeroId(): number {
    return heroId++;
}

export class Hero {
    id: number;
    name: string;

    constructor(hero: IHero) {
        this.id = generateHeroId();
        this.name = hero.name;
    }
}

export interface IHero {
    name: string;
}