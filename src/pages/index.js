import { useRouter } from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';
import { MainPath } from '../common/LinkPath';
import getNewPath from '../common/getNewPath';
import Container from '../components/Container';
import Main from '../components/Main';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Delete from '../components/Delete';
import mapDispatchToProps from '../redux/action';

import styles from '../styles/Home.module.scss';

const Home = (props) => {
  const router = useRouter();

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
            <>
              <Card
                onClick={() => {
                  router.push(getNewPath(MainPath.edit, { id: '123' }));
                }}
              >
                <>
                  <h2>Joe &rarr;</h2>
                  <p>F2E</p>
                </>
              </Card>
              <Delete>delete</Delete>
            </>
          </Grid>
        </Main>

      </Container>
    </>
  );
};

export default connect(
  (state) => state,
  mapDispatchToProps,
)(Home);
