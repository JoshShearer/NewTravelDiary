import Head from 'next/head';

export const pages_Route = () => {
  return (
    <div>
      <Head>
        <title>
          {'pages_Route'.split('_').slice(1).join('/')}
        </title>
        <meta name="description" content="pages_Route Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>pages_Route</h1>
      </main>
    </div>
  );
};

export default pages_Route;

export const navigation = {
  name: 'Page',
  comp: 'pages_Route',
  layout: 'Comps_layout_main',
};
