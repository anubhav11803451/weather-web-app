import Sidebar from './sidebar';
import SidebarItem from './sidebarItem';

export * from './sidebar';
export * from './sidebarItem';

export default Object.assign(Sidebar, { Item: SidebarItem });
