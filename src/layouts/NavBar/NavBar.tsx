import {
  MarkEmailUnreadOutlined,
  ArrowDropDownOutlined,
  HelpOutline
} from '@mui/icons-material';

import { Input } from '../../components/Input/Input';

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-6 bg-white'>
      <div className='flex basis-1/3 items-center gap-3'>
        <p>Payments</p>
        <p className='opacity-50 flex items-center text-sm'>
          <HelpOutline fontSize='inherit' className='mr-1' /> How it works
        </p>
      </div>
      <Input
        placeholder='Search features, tutorials etc.'
        bgColor='bg-gray-100'
      />
      <div className='flex basis-1/3 justify-end gap-4'>
        <button className='p-2 rounded-full bg-gray-200 flex items-center justify-center'>
          <MarkEmailUnreadOutlined fontSize='small' />
        </button>
        <button className='p-2 rounded-full bg-gray-200 flex items-center justify-center'>
          <ArrowDropDownOutlined fontSize='small' />
        </button>
      </div>
    </div>
  );
};
