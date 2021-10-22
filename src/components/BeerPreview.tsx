import styled from '@emotion/styled';
import Image from 'next/image';

import { Beer } from '../types';

type BeerPreviewProps = {
  beer: Beer;
};

export const BeerPreview: React.FC<BeerPreviewProps> = ({ beer }) => (
  <Container>
    <h2>{beer.name}</h2>
    <p>Updated at: {beer.updatedAt}</p>
    <Image src={beer.image} alt={beer.name} width={100} height={400} />
  </Container>
);

const Container = styled.div`
  flex: 1;
  min-width: 300px;
`;
