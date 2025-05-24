import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { scrollToTop } from '@/lib/utils';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the link doesn't include a hash, scroll to top
    if (!props.to.toString().includes('#')) {
      scrollToTop();
    }
    
    // Call the original onClick handler if it exists
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      {...props}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}; 