import { Menu } from './Menu';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
	return (
		<header className="flex justify-around items-center p-4">
			<img className="h-16" src="../../public/routz-logo-2.png" alt="" />
			<Menu />
			<ThemeToggle />
		</header>
	);
}
