import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';
import { getDataFromDb } from '#src/api';
import { RootState, Actions, dispatch, store } from '#src/models/store';
import { Comps_Map_MyGoogleMap } from '#src/Comps/Map/MyGoogleMap';

import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
import * as serviceWorker from '../serviceWorker';
import pages_Home from './Home/index';

import { createStructuredSelector } from '#src/models/utils';
import { useSelector } from '#src/models/hooks';

const selector = createStructuredSelector({
    entryData: (root) => root.models_dEntry.entryData
  });


const TravelDiary: NextPage = () => {
    const selected = useSelector((state) => selector(state));

    useEffect(() => {
        const Data = getDataFromDb()
        .then((data)=>{
          console.log("async Data Get", data)
          if(JSON.stringify(dispatch.models_dEntry.entryData) !== JSON.stringify(data)){
            dispatch.models_dEntry.setEntries(data);
        }})
        .catch((error=> {
          console.log("DataHandling Error ", error.message)
        }))
    },[]);

    
    return (
        <div className="bg-stone-800">
            <Head>
                <title>TravelDiary</title>
                <meta name="description" content="Your New Token Exchange" />
                <link
                    rel="icon"
                    href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uPBrGqSV8_52CWr-Oz2_JgHaHa%26pid%3DApi&f=1"
                />
            </Head>
            <main>
                <Comps_Map_MyGoogleMap />
                <Comps_Navigation_Footer />
            </main>
        </div>
    )
}

export default TravelDiary
