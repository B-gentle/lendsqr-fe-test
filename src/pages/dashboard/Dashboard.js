import React, {  useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { TableContext } from '../../Context';
import Header from '../../components/Header'
import SideNav from '../../components/sideNav/SideNav'
import './dashboard.scss'


const Dashboard = () => {
    const { tableInstance } = useContext(TableContext);    
    
    return (
        <div className='dashboard'>
            
                <Header filter={tableInstance.state.globalFilter} setFilter={tableInstance.setGlobalFilter} />
                <div className='dashboard-body'>
                    <nav>
                        <SideNav />
                    </nav>
                    <Outlet/>
                </div>
        </div >
    )
}

export default Dashboard