import React from "react";
import {
    Container,
    Dropdown,
    Menu,
    Icon
  } from 'semantic-ui-react'

import classes from './CustomHeader.module.css';


const CustomHeader = props => {
    return (
        <React.Fragment>
            <Menu fixed='top' inverted className={classes.header} >
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
        </React.Fragment>
    )
}

export default CustomHeader;