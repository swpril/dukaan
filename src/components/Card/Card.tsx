export const Card = ({
  title,
  content
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className='shadow bg-white rounded-md basis-1/2 px-3 py-4'>
      <h2 className='m-0 opacity-75'>{title}</h2>
      <p className='my-2 text-3xl font-medium tracking-wide'>{content}</p>
    </div>
  );
};
