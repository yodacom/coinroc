import React from 'react';
import Styled from 'styled-components';

const AppHeader = Styled.div`
  background-color: #222;
  color: white;
  font-size: 1.25rem;
  margin: 0;
  padding: 1rem;
  flex-direction: column;
`;


const Header = () => {
  return (
    <AppHeader>
      <h2>CoinRoc MarketPulse</h2>
    </AppHeader>
  );
};

export default Header;
