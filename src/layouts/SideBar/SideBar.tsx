import {
  HomeOutlined,
  ReceiptOutlined,
  GridViewOutlined,
  LocalShippingOutlined,
  CampaignOutlined,
  SignalCellularAltOutlined,
  PaymentsOutlined,
  NearMeOutlined,
  DiscountOutlined,
  GroupOutlined,
  ColorLensOutlined,
  BoltOutlined,
  AccountBalanceWalletOutlined,
  ExpandMoreOutlined
} from '@mui/icons-material';

const MENU_ITEMS = [
  {
    label: 'Home',
    active: false,
    Icon: HomeOutlined
  },
  {
    label: 'Orders',
    active: false,
    Icon: ReceiptOutlined
  },
  {
    label: 'Products',
    active: false,
    Icon: GridViewOutlined
  },
  {
    label: 'Delivery',
    active: false,
    Icon: LocalShippingOutlined
  },
  {
    label: 'Marketing',
    active: false,
    Icon: CampaignOutlined
  },
  {
    label: 'Analytics',
    active: false,
    Icon: SignalCellularAltOutlined
  },
  {
    label: 'Payments',
    active: true,
    Icon: PaymentsOutlined
  },
  {
    label: 'Tools',
    active: false,
    Icon: NearMeOutlined
  },
  {
    label: 'Discounts',
    active: false,
    Icon: DiscountOutlined
  },
  {
    label: 'Audience',
    active: false,
    Icon: GroupOutlined
  },
  {
    label: 'Appearance',
    active: false,
    Icon: ColorLensOutlined
  },
  {
    label: 'Plugins',
    active: false,
    Icon: BoltOutlined
  }
];

export const SideBar = () => {
  return (
    <div className='bg-slate-800 text-white basis-[15%] flex flex-col px-2 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img height={40} width={40} className='bg-white rounded' />
          <div className='flex flex-col justify-between h-full'>
            <p className='m-0'>Nishyan</p>
            <a className='opacity-50 text-sm underline cursor-pointer text-xs md:text-base'>
              Visit store
            </a>
          </div>
        </div>

        <ExpandMoreOutlined className='cursor-pointer' />
      </div>
      <div className='flex-col flex h-full gap-1 justify-start items-start mt-4'>
        {MENU_ITEMS.map(({ Icon, label, active }) => (
          <button
            className={`flex items-center gap-1 text-base w-full py-1 px-2 rounded ${
              active ? 'bg-slate-500' : ''
            }`}
            key={label}>
            <Icon fontSize='small' />
            {label}
          </button>
        ))}
      </div>

      <div className='bg-slate-600 flex items-center gap-2 justify-start p-2 rounded'>
        <div className='bg-slate-500 p-1 rounded flex items-center justify-center'>
          <AccountBalanceWalletOutlined />
        </div>
        <div className='flex flex-col'>
          <p className='opacity-70 text-xs md:text-sm'>Available Credits</p>
          <p className='text-base md:text-xl'>222.10</p>
        </div>
      </div>
    </div>
  );
};
