import axios from 'axios';
import {createContext, useState, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table';
import { COLUMNS } from './components/column';
import { Popover } from 'react-bootstrap';
import { useQuery } from 'react-query';
import SelectRow from './components/SelectRow';
import { AiOutlineFilter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const TableContext = createContext();
export const UsersContext = createContext();

const allUsers = process.env.REACT_APP_ALL_USERS_API

const TableApiContext = ({children}) => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [hideToggle, setHideToggle] = useState()

    const {  isLoading, isError } = useQuery(["usersData"], async () => {
        const res = await axios.get(allUsers);
        setUsers(res.data);
        localStorage.setItem("usersData", JSON.stringify(res.data));
        return res.data
      });

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
  
            const popover = (rowData) => (
              <Popover>
                <Popover.Body>
                <Link to={`/users/${rowData.id}`}>View Details</Link>
                  <div>Activate User</div>
                  <div>Blacklist User</div>
                  
                </Popover.Body>
              </Popover>
            );

            

return (
    <UsersContext.Provider value={{ users, isLoading, isError, user, setUser }}>
      <TableContext.Provider value={{ tableInstance, hideToggle, setHideToggle }}>
        {children}
      </TableContext.Provider>
    </UsersContext.Provider>
  );
}

export { TableApiContext }

