import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <MenuContext.Provider value={[isMobileMenu, setIsMobileMenu]}>
      {children}
    </MenuContext.Provider>
  );
};

MenuContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
