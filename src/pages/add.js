import Head from 'next/head';

import Container from '../components/Container';
import Main from '../components/Main';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Delete from '../components/Delete';

import styles from '../styles/Home.module.scss';
import Form from '../components/Form/Form';

export default function Add() {
  return (
    <>
      <Nav />
      <Container>
        <Head>
          <title>Contact List Add</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="description"
            content="Next.js app"
          />
        </Head>

        <Main>

          <h1 className={styles.title}>
            Add Contact
          </h1>

          <Form />
        </Main>

      </Container>
    </>
  );
}
