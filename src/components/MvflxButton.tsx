import { FC, ReactNode } from 'react';

interface MvflxButtonProps {
    children: ReactNode
}

const MvflxButton: FC<MvflxButtonProps> = ({children}) => (
    <button className='rounded-full border-2 border-brandYellow font-bold text-white px-5 py-2.5 bg-brandBlack cursor-pointer hover:bg-brandYellow hover:text-brandBlack duration-300'>{children}</button>
);

export default MvflxButton;
