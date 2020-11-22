import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  List,
  Menu,
  Segment,
  Icon
} from 'semantic-ui-react'

import classes from './Layout.module.css';
import Search from '../../../containers/Search/Search';

const Layout = () => (
  <div>
    <Menu fixed='top' inverted className={classes.header}>
      <Container>
        <Menu.Item as='a' header>
          <Icon name='medrt' size='huge' />
          <span style={{ fontSize: '1.5rem' }}>SearchWeather</span>
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Grid>
      <Grid.Column width={4} style={{ marginLeft: '1rem' }}>
        <Container text style={{ marginTop: '3em' }}>
          <div class="ui card">
            <div class="content">
              <div class="header">
                Your favorites
                <i aria-hidden="true" class="heart outline icon" style={{ marginLeft: '1em' }}></i>
              </div>
            </div>

            <div class="content">
              <div class="ui feed">
                <div class="event">
                  <div class="label"><img src="/images/avatar/small/jenny.jpg"/>
                   </div>
                  <div class="content"><div class="date">1 day ago</div><div class="summary">You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </div>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </Container>
      </Grid.Column>

      <Grid.Column width={9}>
        <Container text style={{ marginTop: '3em', height: '70vh' }}>
          <Header as='h1' >Your weather search service</Header>
          <Search />
        </Container>
      </Grid.Column>
    </Grid>    


    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Icon name='medrt' size='big' style={{ marginRight: '1.5em' }} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Layout;