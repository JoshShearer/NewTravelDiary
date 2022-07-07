import Head from 'next/head';
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
import { Comps_layout_entryForm } from '#src/Comps/layout/entryForm';
export const pages_newEntry = () => {
  return (
    <div>
      <Head>
        <title>
          {'pages_newEntry'.split('_').slice(1).join('/')}
        </title>
        <meta name="description" content="pages_newEntry Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Comps_layout_entryForm />
        <Comps_Navigation_Footer />
      </main>
    </div>
  );
};

export default pages_newEntry;

export const navigation = {
  name: 'Page',
  comp: 'pages_newEntry',
  layout: 'Comps_layout_main',
};
