import { Beer } from '../types';
import beersFixture from './beers.fixture.json';
import { BeerIn } from './types';

const beersTyped = beersFixture as BeerIn[];

type Params = {
  limit?: number;
};

export const getAllBeers = async (params?: Params): Promise<Beer[]> => {
  const limit = params?.limit ?? 80;

  const beers = beersTyped.slice(0, limit);

  await new Promise((r) => setTimeout(r, 1000));

  return beers.map(transformBeer);
};

export const getFirst10BeersId = async (): Promise<Beer['id'][]> => {
  await new Promise((r) => setTimeout(r, 1000));

  return beersTyped.slice(0, 10).map(({ id }) => id);
};

export const getBeer = async (id: number): Promise<Beer | undefined> => {
  const idx = beersTyped.findIndex((beer) => id === beer.id);

  await new Promise((r) => setTimeout(r, 1000));

  if (idx < 0) {
    return undefined;
  }

  return transformBeer(beersTyped[idx]);
};

const transformBeer = (beer: BeerIn): Beer => ({
  id: beer.id,
  name: beer.name,
  description: beer.description,
  image: beer.image_url,
  alcoholRate: beer.abv,
  foodPairing: beer.food_pairing,
  updatedAt: new Date().toISOString(),
});
