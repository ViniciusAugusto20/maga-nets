import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderBar from '../../molecules/headerBar';
import { MainContent, Container, Footer, BreadCrumb } from './style';

import { IPageDefault } from './types';

const PageDefault: React.FC<IPageDefault> = ({ breadCrumb, children }) => {
  const history = useHistory();
  return (
    <Container>
      <HeaderBar />
      <section>
        <MainContent>
          <BreadCrumb onClick={() => history.goBack()}>{breadCrumb}</BreadCrumb>
          <main>{children}</main>
          <Footer />
        </MainContent>
      </section>
    </Container>
  );
};

export default PageDefault;
