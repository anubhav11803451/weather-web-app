export default function WeatherLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <main className='weather_layout min-h-screen bg-base-100'>{children}</main>;
}
