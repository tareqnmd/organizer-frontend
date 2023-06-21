import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const RootLoading = () => {
    return (
        <div className='h-screen grid place-items-center'>
            <AiOutlineLoading3Quarters className='animate-spin' />
        </div>
    );
};

export default RootLoading;