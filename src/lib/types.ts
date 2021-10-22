type Unit = 'litres' | 'celsius' | 'kilograms' | 'grams';

type AddingMoment = 'start' | 'middle' | 'end' | 'dry hop';

type Attribute = 'bitter' | 'flavour' | 'aroma';

type Malt = {
  name: string;
  amount: {
    value: number;
    unit: Unit;
  };
};

type Hop = {
  name: string;
  amount: {
    value: number;
    unit: Unit;
  };
  add: AddingMoment;
  attribute: Attribute;
};

export type BeerIn = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: Unit;
  };
  boil_volume: {
    value: number;
    unit: Unit;
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: number;
          unit: Unit;
        };
        duration: null;
      }
    ];
    fermentation: {
      temp: {
        value: number;
        unit: Unit;
      };
    };
    twist: null;
  };
  ingredients: {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};
