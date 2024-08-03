import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import Link from 'next/link';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarLogo,
  TopbarRight,
  TopbarSearchWrap,
} from './BasicTopbarComponents';

type TopbarProps = {
  changeMobileSidebarVisibility: () => void;
  changeSidebarVisibility: () => void;
};

const Topbar = ({ changeMobileSidebarVisibility, changeSidebarVisibility }: TopbarProps) => (
  <TopbarContainer>
    <TopbarLeft>
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeSidebarVisibility}
      />
      <Link href={getRouteByKey(ROUTE_KEY.DASHBOARD).path} passHref>
        <TopbarLogo />
      </Link>
    </TopbarLeft>
    <TopbarRight>
      <TopbarSearchWrap>
        <TopbarProfile />
      </TopbarSearchWrap>
    </TopbarRight>
  </TopbarContainer>
);

export default Topbar;
