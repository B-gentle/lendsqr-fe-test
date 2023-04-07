import {format} from 'date-fns';
import ColumnFilter from './ColumnFilter';
export const COLUMNS = [{
    Header: 'ORGANIZATION',
    accessor: 'orgName',
    id: 'ORGANIZATION',
    Filter: ColumnFilter
},
{
    Header: 'USERNAME',
    accessor: 'userName',
    id: 'USERNAME',
    Filter: ColumnFilter
},
{
    Header: 'EMAIL',
    accessor: 'email',
    id: 'EMAIL',
    Filter: ColumnFilter
},
{
    Header: 'PHONE NUMBER',
    accessor: 'profile.phoneNumber',
    id: 'PHONE NUMBER',
    Filter: ColumnFilter
},
{
    Header: 'DATE JOINED',
    accessor: 'createdAt',
    id: 'DATE JOINED',
    Filter: ColumnFilter,
    Cell: ({ value })=>{
return format(new Date(value), 'MMMM dd, yyyy hh:mm a')
    }
},
]