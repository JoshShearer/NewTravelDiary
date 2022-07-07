import Head from 'next/head';
import { Comps_layout_logs } from '#src/Comps';
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';

export const pages_Logs = () => {
  return (
    <div>
      <Head>
        <title>
          {'pages_Logs'.split('_').slice(1).join('/')}
        </title>
        <meta name="description" content="pages_Logs Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Comps_layout_logs />
        <Comps_Navigation_Footer />
      </main>
    </div>
  );
};

export default pages_Logs;

export const navigation = {
  name: 'Page',
  comp: 'pages_Logs',
  layout: 'Comps_layout_main',
};
