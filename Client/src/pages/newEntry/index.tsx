import Head from 'next/head';

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
        <h1>pages_newEntry</h1>
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
