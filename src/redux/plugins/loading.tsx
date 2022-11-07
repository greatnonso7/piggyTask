import createLoadingPlugin from '@rematch/loading';
import { getModelKeys } from '../../utils';
import { Food } from '../models/Food';

export const loadingPlugin = createLoadingPlugin({
  whitelist: [...getModelKeys(Food)],
});
