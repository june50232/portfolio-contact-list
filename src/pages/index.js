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
import MainAPI from '../api/MainAPI';

import styles from '../styles/Home.module.scss';

const FAKE_DATA = [
  {
    id: 1,
    first_name: 'Anakin',
    last_name: 'Skywalker',
    job: 'Jedi Knight',
    description: 'The Chosen one',
  },
  {
    id: 2,
    first_name: 'Boba',
    last_name: 'Fett',
    job: 'Bounty Hunter',
    description: 'Son of Jango Fett',
  },
];

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

          {(props.contacts || []).map((contact, index) => (
            <Grid key={contact.id}>
              <>
                <Card
                  onClick={() => {
                    router.push(getNewPath(MainPath.edit, { id: contact.id }));
                  }}
                >
                  <>
                    <h2>
                      {contact.first_name}
                      {' '}
                      {contact.last_name}
                      {' '}
                      &rarr;
                    </h2>
                    <p>{contact.job}</p>
                    <p>{contact.description}</p>
                  </>
                </Card>
                <Delete
                  id={contact.id}
                >
                  delete
                </Delete>
              </>
            </Grid>
          ))}
        </Main>

      </Container>
    </>
  );
};

const getData = () => new MainAPI().getContacts().then((result) => result);

Home.getInitialProps = async (ctx) => {
  let result = null;
  const resp = await getData().then((resp) => {
    // console.log('getdate resp ====', resp);
    result = resp.contacts;
  });
  console.log('getInitialProps ===', result);
  return { contacts: result };
};

// Home.getInitialProps = (ctx) => ({ contacts: getData().then((resp) => resp) });

export default connect(
  (state) => state,
  mapDispatchToProps,
)(Home);
