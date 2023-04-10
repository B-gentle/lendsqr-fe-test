import React, { useMemo, useState, useEffect, createContext } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table';
import { Container, Row, Popover } from 'react-bootstrap'
import { AiOutlineFilter } from 'react-icons/ai'
import DashboardCard from './DashboardCard'
import { allUsers } from '../../App'
import { COLUMNS } from '../../components/column'
import Table from './usersTable/Table'
import Header from '../../components/Header'
import SideNav from '../../components/sideNav/SideNav'
import SelectRow from '../../components/SelectRow';
import './dashboard.scss'

export const TableContext = createContext();

const Dashboard = () => {

    const [hideToggle, setHideToggle] = useState(false)
    const [selectedRows, setSelectedRows] = useState([])
    console.log(selectedRows)

    const { data: users, isLoading, isError } = useQuery(["usersData"], async () => {
        const res = await axios.get(allUsers);
        localStorage.setItem("usersData", JSON.stringify(res.data));
        return res.data
    })

    const columns = useMemo(() => [...COLUMNS,
    {
        Header: 'STATUS',
        accessor: 'status',
        id: 'STATUS',
        Cell: ({ row }) => (
            <span>{row.index % 5 === 0 ? 'Inactive' : row.index % 2 === 0 ? 'Active' : row.index % 11 === 0 ? 'Blacklisted' : 'Pending'}</span>
        )
    },
    ], [])
    const data = useMemo(() => users ? users : [], [users])


    const popover = (rowData) => (
        <Popover>
          <Popover.Body>
          <Link to={`/users/${rowData.id}`}>View Details</Link>
            <div>Activate User</div>
            <div>Blacklist User</div>
            
          </Popover.Body>
        </Popover>
      );

    const tableInstance = useTable({
        columns,
        data
    },

        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    ...columns,
                    {
                        id: 'selection',
                        Header: <span onClick={() => { setHideToggle(prevHideToggle => !prevHideToggle); console.log(hideToggle) }}><AiOutlineFilter /></span>,
                        Cell: ({ row }) => <SelectRow {...row.getToggleRowSelectedProps()} id={row.id} popover={popover(row.original)}/>
                        }

                ]
            })
        })

    useEffect(() => {
        setSelectedRows(tableInstance.selectedFlatRows.map((row) => row.original))
    }, [tableInstance.selectedFlatRows])



    return (
        <div className='dashboard'>
            <TableContext.Provider value={tableInstance}>
                <Header filter={tableInstance.state.globalFilter} setFilter={tableInstance.setGlobalFilter} />
                <div className='dashboard-body'>
                    <nav>
                        <SideNav />
                    </nav>
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
                </div>
            </TableContext.Provider>
        </div >
    )
}

export default Dashboard