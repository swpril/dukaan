import {
  ExpandMoreRounded,
  SaveAltRounded,
  UnfoldMoreRounded
} from '@mui/icons-material';

import { NavBar } from '../../components/NavBar/NavBar';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { ITableHeader, Table } from '../../components/Table/Table';

const CARDS = [
  {
    title: 'Online orders',
    content: '231'
  },
  {
    title: 'Amount received',
    content: '₹23,92,312.19'
  }
];

const TABLE_HEADERS: ITableHeader[] = [
  {
    id: 'orderId',
    title: 'Order ID',
    sort: false,
    tooltip: false,
    headerAlignmentClass: 'justify-start',
    dataAlignmentClass: 'text-left',
    isLink: true
  },
  {
    id: 'orderDate',
    title: 'Order date',
    sort: true,
    tooltip: false,
    headerAlignmentClass: 'justify-center',
    dataAlignmentClass: 'text-center'
  },
  {
    id: 'orderAmount',
    title: 'Order amount',
    sort: false,
    tooltip: false,
    headerAlignmentClass: 'justify-end',
    dataAlignmentClass: 'text-right'
  },
  {
    id: 'transactionFees',
    title: 'Transaction fees',
    tooltip: true,
    sort: false,
    tooltipContent: 'Transaction fee are charged as a percentage of the order',
    headerAlignmentClass: 'justify-end',
    dataAlignmentClass: 'text-right'
  }
];

const TABLE_DATA = new Array(20).fill({
  orderId: '281209',
  orderDate: new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'long'
  })
    .formatToParts(new Date('07/07/2023'))
    .map(item => (item.type === 'month' ? item.value + ', ' : item.value)),
  orderAmount: '₹1,278.23',
  transactionFees: '₹22'
});
export const Dashboard = () => {
  return (
    <div className='basis-[85%] overflow-y-auto h-full'>
      <NavBar />
      <div className='flex justify-between items-center px-6 py-4 my-2'>
        <h1 className='m-0 text-lg font-medium'>Overview</h1>
        <button className='rounded flex items-center border border-gray-400 bg-white p-1 px-2 text-sm'>
          Last Month <ExpandMoreRounded fontSize='small' />
        </button>
      </div>
      <div className='flex gap-3 px-6'>
        {CARDS.map(({ title, content }) => (
          <Card key={title} title={title} content={content} />
        ))}
      </div>

      <div className='flex px-6 py-4 my-2'>
        <h2 className='m-0 text-lg font-medium'>Transactions | This Month</h2>
      </div>

      <div className='border rounded-md bg-white mx-6 p-2 h-auto mb-2'>
        <div className='flex items-center justify-between'>
          <Input
            placeholder='Search by order ID...'
            bgColor='bg-white'
            border='border border-gray-200 basis-1/8'
          />
          <div className='flex items-center gap-2'>
            <button className='border border-gray-200 p-2 rounded-md text-sm flex items-center'>
              Sort
              <UnfoldMoreRounded fontSize='small' />
            </button>

            <button className='border border-gray-200 p-1 text-sm flex items-center p-2 rounded-md '>
              <SaveAltRounded fontSize='small' />
            </button>
          </div>
        </div>

        <Table headers={TABLE_HEADERS} data={TABLE_DATA as unknown} />
      </div>
    </div>
  );
};
