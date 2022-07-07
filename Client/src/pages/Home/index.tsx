import Head from 'next/head';

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
        <h1>pages_Home</h1>
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
