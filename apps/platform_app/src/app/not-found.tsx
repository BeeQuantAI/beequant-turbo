/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { colorWhite } from '@/styles/palette';
import { Button } from '@/shared/components/Button';

const NotFound404 = () => (
  <NotFoundContainer>
    <NotFountContent>
      <NotFoundImage src="/img/404.png" alt="404" />
      <NotFoundInfo>Ooops! The page you are looking for could not be found</NotFoundInfo>
      {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
      <Button as={Link} variant="primary" href="/login">
        Back Home
      </Button>
    </NotFountContent>
  </NotFoundContainer>
);

export default NotFound404;

// region STYLES

const NotFoundContainer = styled.div`
  text-align: center;
  height: 100vh;
  overflow: auto;
  display: flex;
  background: url('/img/bg_404.png') no-repeat center;
  background-size: cover;

  button {
    margin: 0;
  }
`;

const NotFountContent = styled.div`
  margin: auto;
  padding: 10px;
`;

const NotFoundImage = styled.img`
  max-width: 500px;
  width: 100%;
`;

const NotFoundInfo = styled.h3`
  color: ${colorWhite};
  margin-bottom: 20px;
  margin-top: 90px;
`;

// endregion
