import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Comps_Map_Marker } from '#src/Comps/Map/Marker';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import { Comps_Map_BaseMap } from '#src/Comps/Map/BaseMap';
import { Comps_misc_Modal } from '#src/Comps/misc/Modal';
import isEmpty from 'lodash.isempty';

import { createStructuredSelector } from '#src/models/utils';
import { useSelector } from '#src/models/hooks';

// import { RootState, Actions, dispatch, store } from '#src/models/store'

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

const selector = createStructuredSelector({
  entryData: (root) => root.models_dEntry.entryData,
});

export const Comps_Map_RouteMap = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const [modal, setModal] = useState(false);

  const selected = useSelector((state) => selector(state, props));

  const currentLocation = selected.entryData[Math.round(selected.entryData.length / 2)];
  console.log('🚀 ~ file: index.tsx ~ line 34 ~ currentLocation', currentLocation);
  const mapSize = { height: '97vh', width: '100%' }
  return (
    <React.Fragment>
      <div style={mapSize}>
        {!isEmpty(currentLocation) ? (
          <Comps_Map_BaseMap
            places={selected.entryData}
            currentLocation={currentLocation.gps}
            mapSize={mapSize}
          />
        ) : (
          <Comps_misc_Modal
            message="No entries found.  Start your first entry"
            open={modal}
            setOpen={setModal}
            route="/newEntry"
          />
        )}
      </div>
    </React.Fragment>
  );
};
