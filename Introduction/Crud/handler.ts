import type { HandlerFunc } from "https://deno.land/x/abc/mod.ts";
import { Hero, IHero } from "./hero.ts";

let heroes: Hero[] = [];

export const findAll: HandlerFunc = () => heroes;

export const findOne: HandlerFunc = (c) => {
    const { id } = c.params as { id: string };
    return heroes.find((hero: Hero) => hero.id.toString() === id);
}

export const create: HandlerFunc = async (c) => {
    const { name } = await c.body<IHero>();
    const hero = new Hero({ name });
    heroes.push(hero);
    return hero;
}

export const remove: HandlerFunc = async (c) => {
    const { id } = c.params as unknown as { id: string };
    const heroId = parseInt(id);
    heroes = heroes.filter((hero: Hero) => {
        return hero.id !== heroId;
    });
    return `Héroe con id ${id} eliminado`;
}