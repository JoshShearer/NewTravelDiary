import { createSelector, createStructuredSelector } from '#src/models/utils';

const selected = createStructuredSelector({
  property1: (root, props) => true,
  property2: (root, props) => false,
});

export const selectors_mySelector = createSelector(
  selected,
  ({ property1, property2 }) => {
    return property1 && property2;
  }
);
