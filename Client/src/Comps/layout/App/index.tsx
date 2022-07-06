import React from 'react';
// import useSelector from 'reselect';

// import { createStructureSelector } from '#src/models/util'
// import { userSelector } from '#src/models/hooks';

// import { RootState, Actions, dispatch, store } from '#src/models/store'

import { Comps_Navigation_Header } from '#src/Comps/Navigation/Header';
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
import { XIcon } from '@heroicons/react/outline';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_App = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)

  return (
    <div className="Comps_layout_App">
      <p className="text-white">Comps_layout_App</p>
      <Comps_Navigation_Footer />
    </div>
  );
};

// export class Comps_layout_App extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_layout_App</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));
