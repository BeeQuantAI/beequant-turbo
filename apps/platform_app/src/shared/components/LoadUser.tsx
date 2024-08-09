import { connect, useLoadUser } from '@/hooks/userHooks';
import { IPropChild } from '@/utils/types';
import Loading from './Loading';

const LoadUser = ({ children }: IPropChild) => {
  const { loading } = useLoadUser();

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
};

export default connect(LoadUser);
