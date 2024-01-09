import { SearchOutlined } from '@mui/icons-material';

export const Input = ({
  placeholder,
  bgColor = '',
  border = ''
}: {
  placeholder: string;
  bgColor?: string;
  border?: string;
}) => {
  return (
    <div
      className={
        'basis-1/4 rounded-md flex items-center gap-2 py-2 px-3 ' +
        bgColor +
        ' ' +
        border
      }>
      <SearchOutlined />
      <input
        type='text'
        name='text'
        id='text'
        placeholder={placeholder}
        className={
          'placeholder:font-light form-input focus:outline-none w-full block ' +
          bgColor
        }
      />
    </div>
  );
};
