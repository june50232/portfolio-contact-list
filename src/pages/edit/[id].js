import Head from 'next/head';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Nav from '../../components/Nav';

import styles from '../../styles/Home.module.scss';
import Form from '../../components/Form/Form';

export default function Id() {
  return (
    <>
      <Nav />
      <Container>
        <Head>
          <title>Contact List Edit</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="description"
            content="Next.js app"
          />
        </Head>

        <Main>

          <h1 className={styles.title}>
            Edit Contact
          </h1>

          <Form />
        </Main>

      </Container>
    </>
  );
}
