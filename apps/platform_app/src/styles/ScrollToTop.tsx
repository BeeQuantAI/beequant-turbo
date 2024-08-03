import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on pathname to trigger the scroll to top

  return <div>{children}</div>;
};

export default ScrollToTop;
