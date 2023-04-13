import React, {useContext } from 'react';
import Table from './dashboard/usersTable/Table';
import { Container, Row } from 'react-bootstrap';
import DashboardCard from './dashboard/DashboardCard';
import {UsersContext, TableContext} from '../Context';

  const Users = () => {
    const { users, isLoading, isError } = useContext(UsersContext);
    const { hideToggle } = useContext(TableContext);

  return (
    <Container style={{ border: '2px solid red', width: '80%', boxSizing: 'border-box' }}>
    <Row className='dashcards'>
        <DashboardCard title='Users' figures={users?.length} />
        <DashboardCard title='Active Users' />
        <DashboardCard title='Users with Loans' />
        <DashboardCard title='Users with savings' />
    </Row>
    <Row>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Unable to fetch data</div>}
        <Table hideToggle={hideToggle} />
    </Row>
</Container>
  )
  }

export default Users
