import React, { useState } from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// import * as FilePond from 'react-filepond';

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import isEmpty from 'lodash.isempty';


// Register the plugins
registerPlugin(FilePondPluginFileEncode, FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginImageTransform);
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'

import { Comps_misc_placeholder } from '#src/Comps';



const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_imageHandler = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const [files, setFiles] = useState([])
  
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)


  return (
    <div className="Comps_layout_imageHandler">
      <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
    </div>
  );
};

// export class Comps_layout\imageHandler extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_layout\imageHandler</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));

 