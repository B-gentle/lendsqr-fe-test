import React, { useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table';
import { CgSortAz, CgSortZa } from 'react-icons/cg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { AiOutlineFilter } from 'react-icons/ai'
import ColumnFilter from '../../../components/ColumnFilter';
import SelectRow from '../../../components/SelectRow';
import { Link } from 'react-router-dom';
import GlobalSearch from '../../../components/GlobalSearch';
import { Col, Container, Row, Table as BootStrapTable, Popover } from 'react-bootstrap';
import '../../../components/components.scss';


const Table = ({ columns, data }) => {

    const [hideToggle, setHideToggle] = useState(false)

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
                        Cell: ({ row }) => {
                            return <SelectRow {...row.getToggleRowSelectedProps()} id={row.id} popover={popover} />
                        }
                    }

                ]
            })
        })

    const { getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        page,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        state,
        setGlobalFilter,
        selectedFlatRows,
    } = tableInstance

    const { globalFilter, pageIndex } = state

    const popover = (
        <Popover id="view-details-popup">
            <Popover.Body>
                <pre>
                    <code>
                        <div>
                            {
                                selectedFlatRows.map((row) => row?.id
                                )}
                        </div>
                        <div>
                            Activate User
                        </div>
                        <div>
                            Blacklist User
                        </div>
                    </code>
                </pre>
            </Popover.Body>
        </Popover>
    );

    return (
        <Container>
            <GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
            <Row>
                {hideToggle && <Col lg={4}>
                    {headerGroups.map((headerGroup) => (
                        <div {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <div key={column.id}>
                                    <div>{column.canFilter ? <ColumnFilter column={column} /> : null}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Col>}
                <Col lg={hideToggle ? 7 : 12}>
                    <BootStrapTable responsive {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                        >
                                            {column.render('Header')}
                                            <span>{column.isSorted ? (column.isSortedDesc ? <CgSortAz /> : <CgSortZa />) : ''}</span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </BootStrapTable>
                    <div className='table-pagination'>
                        <span>
                            Showing{' '}
                            <select onChange={(e) => { gotoPage(e.target.value) }}>
                                {pageOptions.map(select => {
                                    return <option key={select} value={select}>{select + 1}</option>
                                })}
                            </select>{' '}
                            <strong>
                                out of {pageOptions.length}
                            </strong>
                            {' '}
                        </span>

                        <span>
                            <button onClick={() => previousPage()} disabled={!canPreviousPage}><FaAngleLeft /></button>
                            {pageOptions.map((num, id) => {
                                return <span key={id}
                                    style={{ fontWeight: pageIndex === id ? 'bold' : 'normal', cursor: 'pointer', marginLeft: '10px' }}
                                    onClick={() => gotoPage(id)}
                                >
                                    {num + 1}</span>
                            })}
                            <button onClick={() => nextPage()} disabled={!canNextPage}><FaAngleRight /></button>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Table