import Head from 'next/head';

import Container from '../components/Container';
import Main from '../components/Main';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Delete from '../components/Delete';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Head>
          <title>Contact List</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="description"
            content="Next.js app"
          />
        </Head>

        <Main>

          <h1 className={styles.title}>
            Contact List
          </h1>

          <div className={styles.sort}>
            <a>Sort</a>
          </div>

          <Grid>
            <Card>
              <>
                <a href="https://nextjs.org/docs">
                  <h2>Joe &rarr;</h2>
                  <p>F2E</p>
                </a>
                <Delete>delete</Delete>
              </>
            </Card>
          </Grid>
        </Main>

      </Container>
    </>
  );
}
