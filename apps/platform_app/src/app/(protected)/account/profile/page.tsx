'use client';

import { Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import ProfileMain from './_components/ProfileMain';

const Profile = () => {
  useTitle('Profile - BeeQuant');

  return (
    <Container>
      <Row>
        <ProfileMain />
      </Row>
    </Container>
  );
};
export default Profile;
