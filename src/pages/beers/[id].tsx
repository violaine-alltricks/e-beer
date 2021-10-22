import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BeerPreview } from '../../components/BeerPreview';
import { getBeer, getFirst10BeersId } from '../../lib/beers';
import { Beer } from '../../types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const beer = await getBeer(Number(params?.id));

  return {
    props: {
      beer,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const beersId = await getFirst10BeersId();

  const paths = beersId.map((id) => ({
    params: { id: String(id) },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

type BeerProps = {
  beer: Beer;
};

const BeerDetail: NextPage<BeerProps> = ({ beer }) => <BeerPreview beer={beer} />;

export default BeerDetail;
