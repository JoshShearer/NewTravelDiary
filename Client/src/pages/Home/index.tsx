import Head from 'next/head';
<<<<<<< HEAD
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
import { Comps_Map_MyGoogleMap } from '#src/Comps/Map/MyGoogleMap';
=======
import { Comps_Map_MyGoogleMap } from '#src/Comps/Map/MyGoogleMap';
import { Comps_Navigation_Footer } from '#src/Comps';
>>>>>>> c08d3e05642ab4a116e49789faca3457970fcffc

export const pages_Home = () => {
  return (
    <div>
      <Head>
        <title>
          {'pages_Home'.split('_').slice(1).join('/')}
        </title>
        <meta name="description" content="pages_Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Comps_Map_MyGoogleMap />
        <Comps_Navigation_Footer />
      </main>
    </div>
  );
};

export default pages_Home;

export const navigation = {
  name: 'Page',
  comp: 'pages_Home',
  layout: 'Comps_layout_main',
};

