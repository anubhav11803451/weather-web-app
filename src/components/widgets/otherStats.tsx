import { CurrentWeather } from '@/@types/types';
import { CloudIcon } from '@heroicons/react/24/solid';

export default function OtherStats({ data }: { data: CurrentWeather }) {
    return (
        <div className='stats flex flex-wrap shadow sm:flex-nowrap'>
            <div className='stat'>
                <div className='stat-figure text-primary'>
                    <svg
                        height='32px'
                        version='1.1'
                        viewBox='0 0 32 32'
                        width='32px'
                        style={{ rotate: `${data.wind_direction_10m}deg` }}
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title />
                        <desc />
                        <defs />
                        <g
                            fill='none'
                            fill-rule='evenodd'
                            id='Page-1'
                            stroke='none'
                            stroke-width='2'
                        >
                            <g fill='currentColor' id='icon-43-wind'>
                                <path
                                    d='M30,14 C30,11.790861 28.2046438,10 26,10 C23.790861,10 22,11.7894101 22,14 L23,14 C23,12.3431458 24.3465171,11 26,11 C27.6568542,11 29,12.3465171 29,14 C29,15.6568542 27.6568766,17 25.9920699,17 L3,17 L3,18 L26.0015293,18 C28.2098237,18 30,16.2046438 30,14 L30,14 Z M21,13 C21,11.3431458 19.6534829,10 18,10 C16.3431458,10 15,11.3420576 15,12.991394 L15,13 L16,13 C16,11.8954305 16.8877296,11 18,11 C19.1045695,11 20,11.8877296 20,13 C20,14.1045695 19.1029399,15 17.9941413,15 L6,15 L6,16 L18.0005775,16 C19.6571128,16 21,14.6534829 21,13 L21,13 Z M25,21 C25,22.1045695 24.1122704,23 23,23 L23,23 C21.8954305,23 21,22.1052949 21,21.0057373 L21,21 L22,21 C22,21.5522847 22.4438648,22 23,22 L23,22 C23.5522847,22 24,21.5561352 24,21 L24,21 C24,20.4477153 23.5510798,20 22.992516,20 L9,20 L9,19 L23.0059397,19 C24.1072288,19 25,19.8877296 25,21 L25,21 L25,21 Z'
                                    id='wind'
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='stat-title'>Wind</div>
                <div className='stat-value text-primary'>
                    {data.wind_speed_10m}
                    {' ' + data.units['wind_speed_10m']}
                </div>
                <div className='stat-desc'>
                    Wind Direction: {data.wind_direction_10m}
                    {' ' + data.units['wind_direction_10m']}
                </div>
            </div>

            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <CloudIcon className='size-10' />
                </div>
                <div className='stat-title'>Cloud Coverage</div>
                <div className='stat-value text-secondary'>
                    {data.cloud_cover}
                    {' ' + data.units['cloud_cover']}
                </div>
                {/* <div className='stat-desc'>21% more than last month</div> */}
            </div>

            <div className='stat'>
                <div className='stat-figure text-accent'>
                    <svg height='32px' version='1.1' viewBox='0 0 32 32' width='32px'>
                        <title />
                        <desc />
                        <defs />
                        <g
                            fill='none'
                            fill-rule='evenodd'
                            id='Heavy-Rain'
                            stroke='none'
                            stroke-width='1'
                        >
                            <g stroke='currentColor' transform='translate(3.000000, 2.000000)'>
                                <path
                                    d='M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092'
                                    id='Oval'
                                    stroke-width='2'
                                />
                                <path
                                    d='M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072'
                                    id='Oval'
                                    stroke-linecap='round'
                                    stroke-width='2'
                                />
                                <path
                                    d='M14.2414368,23.7414368 L14.5508969,25.8014677 C14.6849183,26.6936284 15.4513825,27.3535534 16.3535534,27.3535534 C17.1819805,27.3535534 17.8535534,26.6819805 17.8535534,25.8535534 C17.8535534,24.9513825 17.1936284,24.1849183 16.3014677,24.0508969 L14.2414368,23.7414368 Z'
                                    fill='currentColor'
                                    id='Rectangle-4'
                                    transform='translate(16.000000, 25.500000) rotate(45.000000) translate(-16.000000, -25.500000) '
                                />
                                <path
                                    d='M6.24143682,23.7414368 L6.55089694,25.8014677 C6.6849183,26.6936284 7.45138247,27.3535534 8.35355339,27.3535534 C9.18198052,27.3535534 9.85355339,26.6819805 9.85355339,25.8535534 C9.85355339,24.9513825 9.1936284,24.1849183 8.30146774,24.0508969 L6.24143682,23.7414368 Z'
                                    fill='currentColor'
                                    id='Rectangle-3'
                                    transform='translate(8.000000, 25.500000) rotate(45.000000) translate(-8.000000, -25.500000) '
                                />
                                <path
                                    d='M10.2414368,19.7414368 L10.5508969,21.8014677 C10.6849183,22.6936284 11.4513825,23.3535534 12.3535534,23.3535534 C13.1819805,23.3535534 13.8535534,22.6819805 13.8535534,21.8535534 C13.8535534,20.9513825 13.1936284,20.1849183 12.3014677,20.0508969 L10.2414368,19.7414368 Z'
                                    fill='currentColor'
                                    id='Rectangle-2'
                                    transform='translate(12.000000, 21.500000) rotate(45.000000) translate(-12.000000, -21.500000) '
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='stat-title'>Rain</div>
                <div className='stat-value text-accent'>
                    {data.rain}
                    {' ' + data.units['rain']}
                </div>
                <div className='stat-desc ' />
            </div>
        </div>
    );
}
