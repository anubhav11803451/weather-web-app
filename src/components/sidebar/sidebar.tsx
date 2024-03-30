import { MouseEvent } from 'react';
import { twJoin } from 'tailwind-merge';

export function Sidebar({
    children,
    title,
    onClose,
}: Readonly<{
    children: React.ReactNode;
    title?: string;
    onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}>) {
    return (
        <nav className='sidebar drawer-side z-30'>
            <label
                htmlFor='left-sidebar-drawer'
                aria-label='close sidebar'
                className='drawer-overlay'
            />
            <ul className='menu min-h-full w-80 gap-2 bg-base-100 pt-2 text-base-content'>
                <ul
                    className={twJoin(
                        'mb-4 mt-2',
                        'flex h-auto w-full flex-row items-center',
                        title ? 'justify-between' : 'justify-end',
                    )}
                >
                    {title && <h2 className='text-2xl font-bold'>{title}</h2>}
                    {onClose && (
                        <li className='flex-initial self-auto'>
                            <button className='btn btn-circle btn-md lg:hidden ' onClick={onClose}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='size-4'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </li>
                    )}
                </ul>
                {children}
            </ul>
        </nav>
    );
}

export default Sidebar;
