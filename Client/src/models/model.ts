/* CREDITOR_GENERATED */
import { Models } from '@rematch/core';

import { models_Location } from '#src/models/Location';
import { models_dEntry } from '#src/models/dEntry';

export interface RootModel extends Models<RootModel> {
  models_Location: typeof models_Location;
  models_dEntry: typeof models_dEntry;
}

export const models: RootModel = {
  models_Location,
  models_dEntry,
}
