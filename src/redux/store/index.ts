import { init, RematchRootState, RematchDispatch } from '@rematch/core';

import { models, RootModel } from '../models';
import { loadingPlugin } from '../plugins';
import { persistPlugin } from '../persist';

export default init({
  models,
  //@ts-ignore
  plugins: [loadingPlugin, persistPlugin],
  redux: {},
});

export type RootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
