import React, { useContext } from 'react';
import { CgSortAz, CgSortZa } from 'react-icons/cg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import ColumnFilter from '../../../components/ColumnFilter';
import { Col, Container, Row, Table as BootStrapTable } from 'react-bootstrap';
import '../../../components/components.scss';
import { TableContext } from '../Dashboard';


const Table = ({ hideToggle }) => {

    const tableInstance = useContext(TableContext);

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
    } = tableInstance

    const { pageIndex } = state  
    
    return (
        <Container>
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