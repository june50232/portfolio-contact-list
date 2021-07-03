import Head from 'next/head';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Nav from '../../components/Nav';

import styles from '../../styles/Home.module.scss';
import Form from '../../components/Form/Form';
import MainAPI from '../../api/MainAPI';

export default function Id(props) {
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

          <Form
            isEdit
            id={props.id}
            contact={props.contact}
          />
        </Main>

      </Container>
    </>
  );
}

const getData = (id) => new MainAPI().getContact(id).then((result) => result);

Id.getInitialProps = async ({ req, query: { id } }) => {
  let result = null;
  const resp = await getData(id).then((resp) => {
    result = (resp.contact || {}).data || null;
  });
  return {
    contact: result,
    id,
  };
};
