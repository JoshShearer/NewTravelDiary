import type { NextPage } from 'next'
import Head from 'next/head';
import { init } from '@rematch/core';
// import { Comps_layout_App } from '#src/Comps/layout/App';
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
// import { pages_Home} from '#src/pages/Home';
import { store } from '#src/models/store';
import * as serviceWorker from '../serviceWorker';
import pages_Home from './Home/index';

const TravelDiary: NextPage = () => {
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
                {/* <Comps_layout_App /> */}
                <Comps_Navigation_Footer />
            </main>
        </div>
    )
}

export default TravelDiary
