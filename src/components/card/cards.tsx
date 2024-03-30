import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

export function Card({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
    return <div className={twJoin('card bg-base-100 shadow-xl', className)}>{children}</div>;
}

export function CardBody({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className='card-body'>{children}</div>;
}

export function CardTitle({ children }: Readonly<{ children: React.ReactNode }>) {
    return <h2 className='card-title'>{children}</h2>;
}

export function CardActions({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className='card-actions'>{children}</div>;
}

export function CardImage({
    src,
    alt,
    className,
}: Readonly<{ src: string; alt: string; className?: string }>) {
    return (
        <figure className={twJoin('card-image', className)}>
            <Image src={src} alt={alt} width={100} height={100} />
        </figure>
    );
}
