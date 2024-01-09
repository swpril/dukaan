import {
  ArrowDropDown,
  InfoOutlined,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@mui/icons-material';
import { Tooltip } from '@mui/material';

const PAGINATION = new Array(9).fill(0).map((_, index) => ({
  title: (index + 10).toString(),
  active: index + 10 === 10
}));

PAGINATION.unshift({
  title: '...',
  active: false
});

PAGINATION.unshift({
  title: '1',
  active: false
});

export interface ITableHeader {
  id: string;
  sort: boolean;
  tooltip: boolean;
  tooltipContent?: string;
  title: string;
  headerAlignmentClass: 'justify-start' | 'justify-center' | 'justify-end';
  dataAlignmentClass: 'text-left' | 'text-right' | 'text-center';
  isLink?: boolean;
}

export interface ITableRow {
  data: any;
}

export const Table = ({
  data,
  headers
}: { headers: ITableHeader[] } & ITableRow) => {
  return (
    <>
      <div className='table-wrap block max-h-48 my-3'>
        <table className='border w-full sticky top-0'>
          <thead>
            <tr
              className={`bg-gray-100 grid p-2`}
              style={{ gridTemplateColumns: `repeat(${headers.length},1fr)` }}>
              {headers.map(header =>
                header.tooltip ? (
                  <th
                    key={header.id}
                    className={
                      'font-normal text-sm flex items-center gap-1 cursor-pointer ' +
                      header.headerAlignmentClass
                    }>
                    {header.title}
                    <Tooltip title={header.tooltipContent}>
                      <InfoOutlined fontSize='small' />
                    </Tooltip>
                    {header.sort && <ArrowDropDown fontSize='small' />}
                  </th>
                ) : (
                  <th
                    className={
                      'font-normal text-sm flex items-center gap-1 cursor-pointer ' +
                      header.headerAlignmentClass
                    }
                    key={header.id}>
                    {header.title}
                    {header.sort && <ArrowDropDown fontSize='small' />}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className='overflow-y-scroll h-32 max-h-32'>
            {data.map((item: any, index: number) => {
              return (
                <tr
                  key={index}
                  className={`grid grid-cols-${headers.length} p-2`}
                  style={{
                    gridTemplateColumns: `repeat(${headers.length},1fr)`
                  }}>
                  {headers.map((header, index) => (
                    <td
                      key={header.id + index}
                      className={
                        'font-normal text-sm ' + header.dataAlignmentClass
                      }>
                      {header.isLink ? (
                        <a className='text-blue-500 cursor-pointer'>
                          #{item[header.id]}
                        </a>
                      ) : (
                        item[header.id]
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav className='my-4'>
        <ul className='list-none flex justify-center gap-4'>
          <li>
            <button className='flex items-center text-sm rounded-md border border-gray-200 p-2'>
              <KeyboardArrowLeftRounded fontSize='small' />
              Previous
            </button>
          </li>

          {PAGINATION.map(item => (
            <li key={item.title}>
              <button
                className={`p-2 rounded-md flex items-center text-sm ${
                  item.active && 'bg-sky-700 text-white'
                }`}>
                {item.title}
              </button>
            </li>
          ))}
          <li>
            <button className='flex items-center rounded-md text-sm border border-gray-200 p-2'>
              Next <KeyboardArrowRightRounded fontSize='small' />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
