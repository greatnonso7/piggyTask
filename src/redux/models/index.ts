import { Models } from '@rematch/core';
import { Food } from './Food';

export interface RootModel extends Models<RootModel> {
  Food: typeof Food;
}

export const models: RootModel = { Food };
