import Head from 'next/head';

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
        <h1>pages_Logs</h1>
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
