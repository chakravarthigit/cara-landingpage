import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '@/lib/utils';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if it's a page navigation (not a hash link)
    if (!pathname.includes('#')) {
      scrollToTop();
    }
  }, [pathname]);

  // This component doesn't render anything
  return null;
}; 