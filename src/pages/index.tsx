import styled from '@emotion/styled';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BeerPreview } from '../components/BeerPreview';

import { getAllBeers } from '../lib/beers';
import { Beer } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const beers = await getAllBeers({
    limit: 10,
  });

  return {
    props: {
      beers,
    },
    revalidate: 60,
  };
};

type HomeProps = {
  beers: Beer[];
};

const Home: NextPage<HomeProps> = ({ beers }) => {
  return (
    <div>
      <Head>
        <title>Beers</title>
        <meta name="description" content="ISR Beers listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <BeersContainer>
          {beers.map((beer) => (
            <Link key={beer.id} href={`/beers/${beer.id}`}>
              <a>
                <BeerPreview beer={beer} />
              </a>
            </Link>
          ))}
        </BeersContainer>
      </MainContainer>
    </div>
  );
};

const BeersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const MainContainer = styled.main`
  padding: 24px 32px;
`;

export default Home;
