import React, { useEffect } from 'react';
import { Comps_layout_logContainer } from "#src/Comps/layout/logContainer"
// import useSelector from 'reselect';

import { createStructuredSelector } from '#src/models/utils'
import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'




const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
const selector = createStructuredSelector({
   entryData: (root) => root.models_dEntry
})

export const Comps_layout_logs = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const selected = useSelector((state) => selector(state, props));

  return (
    <div className="Comps_layout_logs">
      {selected.entryData.map((entry, key) => (
        <Comps_layout_logContainer entry={entry} key={key}/>
      ))}
    </div>
  );
};

 