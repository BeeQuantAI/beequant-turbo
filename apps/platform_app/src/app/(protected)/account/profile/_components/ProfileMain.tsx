/* eslint-disable @typescript-eslint/no-use-before-define */
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Card } from '@/shared/components/Card';
import { left } from '@/styles/directions';
import Image from 'next/image';
import { ProfileCard } from './ProfileBasicComponents';

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <ProfileCard>
        <ProfileInformation>
          <ProfileAvatar>
            <Image src="/img/ava.png" alt="avatar" width={150} height={150} />
          </ProfileAvatar>
          <ProfileData>
            <ProfileName>Holly Hammond</ProfileName>
            <ProfileWork>Account Manager</ProfileWork>
            <ProfileContact>holly@colony.com</ProfileContact>
            <ProfileContact dir="ltr">+42-452-743-233</ProfileContact>
          </ProfileData>
        </ProfileInformation>
      </ProfileCard>
    </Card>
  </Col>
);

export default ProfileMain;

// region STYLES

const ProfileInformation = styled.div`
  padding: 30px 40px;
  display: flex;
  text-align: ${left};
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1345px) and (min-width: 1200px) {
    padding: 30px 15px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

const ProfileAvatar = styled.div`
  height: 140px;
  width: 140px;
  overflow: hidden;
  border-radius: 50%;

  img {
    height: 100%;
  }

  @media (max-width: 1345px) and (min-width: 1200px) {
    height: 130px;
    width: 130px;
  }
`;

const ProfileData = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 360px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

const ProfileName = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  line-height: 18px;
`;

const ProfileWork = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0;
  opacity: 0.6;
  line-height: 18px;
`;

const ProfileContact = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  line-height: 18px;
`;

// endregion
