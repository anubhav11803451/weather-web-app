'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twJoin } from 'tailwind-merge';

export function SidebarItem({
    children,
    href,
    label,
    icon,
    className,
}: Readonly<{
    children?: React.ReactNode;
    href: string;
    label?: string;
    icon?: React.ReactNode;
    className?: ({ isActive }: Readonly<{ isActive: boolean }>) => string;
}>) {
    const pathname = usePathname();
    const isActive = pathname === href;
    if (children) {
        return (
            <li
                className={twJoin(
                    'sidebar-item-link',
                    isActive ? 'bg-base-200  font-semibold ' : 'font-normal',
                )}
            >
                <Link href={href} className={className && className({ isActive })}>
                    {children}
                    {isActive && (
                        <span
                            className='absolute inset-y-0 left-0 w-1 rounded-r-md bg-primary '
                            aria-hidden='true'
                        />
                    )}
                </Link>
            </li>
        );
    }
    return (
        <li
            className={twJoin(
                'sidebar-item-link',
                isActive ? 'bg-base-200  font-semibold ' : 'font-normal',
            )}
        >
            <Link href={href} className={className && className({ isActive })}>
                {icon}
                {label && <span className='ml-2'>{label}</span>}
                {isActive && (
                    <span
                        className='absolute inset-y-0 left-0 w-1 rounded-r-md bg-primary '
                        aria-hidden='true'
                    />
                )}
            </Link>
        </li>
    );
}

export default SidebarItem;
