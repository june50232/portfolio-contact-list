import { useRouter } from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';
import { useState } from 'react';
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

const getData = () => new MainAPI().getContacts().then((result) => result);

const Home = (props) => {
  const router = useRouter();

  const [
    isSortWayAToB,
    setSortWay,
  ] = useState(true);

  const sortFn = (defaultValues) => {
    const ori = [].concat(defaultValues);
    ori.sort((a, b) => {
      const keyA = a.first_name;
      const keyB = b.first_name;
      // Compare the 2 dates
      if (keyA < keyB) return isSortWayAToB ? -1 : 1;
      if (keyA > keyB) return isSortWayAToB ? 1 : -1;
      return 0;
    });
    return ori;
  };

  const [
    data,
    sortData,
  ] = useState(sortFn(props.contacts || []));

  const onSort = () => {
    const ori = sortFn(data);
    sortData(ori);
    setSortWay(!isSortWayAToB);
  };

  const onRenew = () => {
    getData().then((resp) => {
      sortData(sortFn(resp.contacts || []));
    });
  };

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

          <div
            className={styles.sort}
            onClick={onSort}
          >
            <a>Sort</a>
          </div>

          {!props.utilities.confirm.open && (data || []).map((contact, index) => (
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
                  name={`${contact.first_name} ${contact.last_name}`}
                  onSuccessDelete={onRenew}
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

Home.getInitialProps = async (ctx) => {
  let result = null;
  const resp = await getData().then((resp) => {
    result = resp.contacts;
  });
  return { contacts: result };
};

export default connect(
  (state) => state,
  mapDispatchToProps,
)(Home);
