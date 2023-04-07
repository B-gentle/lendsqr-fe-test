import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import DashboardCard from './DashboardCard'
import { COLUMNS } from '../../components/column'
import Table from './usersTable/Table'
import Header from '../../components/Header'
import SideNav from '../../components/sideNav/SideNav'
import './dashboard.scss'

const Dashboard = () => {

    const { data: users, isLoading, isError } = useQuery(["usersData"], async () => {
        const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
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

        const [globalFilter, setGlobalFilter] = useState('')

    return (
        <div>
            <Header filter={globalFilter} setFilter={setGlobalFilter}/>
            <div className='dashboard-body'>
                <nav>
                    <SideNav />
                </nav>
                <section>
                    <div className='dashcards'>
                        <DashboardCard title='Users' figures={users?.length} />
                        <DashboardCard title='Active Users' />
                        <DashboardCard title='Users with Loans' />
                        <DashboardCard title='Users with savings' />
                    </div>
                    {isLoading && <div>Loading...</div>}
                    <Table data={data} columns={columns} globalFilter={globalFilter} />
                </section>
            </div>

        </div >
    )
}

export default Dashboard