import React, { useEffect } from 'react';
import { Comps_layout_logContainer } from "#src/Comps/layout/logContainer"
import { deleteFromDB } from '#src/api';

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
   entryData: (root) => root.models_dEntry.entryData
})

export const Comps_layout_logs = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const selected = useSelector((state) => selector(state, props));

  const removeEntry = (Entry) => {
    deleteFromDB(Entry.id, selector.entryData)
    .then((data)=>{
      console.log("DeleteComplete ", data)
    })
    .catch((error)=> {
      console.log("DeleteFail ", error)
    })
  }

  return (
    <div className="Comps_layout_logs">
      {selected.entryData.map((entry, key) => (
        <Comps_layout_logContainer entry={entry} key={key} remove={removeEntry}/>
      ))}
    </div>
  );
};

 