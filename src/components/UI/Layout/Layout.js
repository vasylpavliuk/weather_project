import React from 'react'
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'

import CustomHeader from '../CustomHeader/CustomHeader';
import Favourites from '../../../containers/Favourites/Favourites';
import Search from '../../../containers/Search/Search';
import Footer from '../Footer/Footer';

const Layout = () => (
  <div>
    <CustomHeader />

    <Grid>
      <Grid.Column width={4} style={{ marginLeft: '1rem' }}>
        <Container text style={{ marginTop: '3em' }}>
         <Favourites />
        </Container>
      </Grid.Column>

      <Grid.Column width={11}>
        <Container text style={{ marginTop: '3em', height: '70vh' }}>
          <Header as='h1' >Your weather search service</Header>
          <Search />
        </Container>
      </Grid.Column>
    </Grid>    

    <Footer />
  </div>
)

export default Layout;