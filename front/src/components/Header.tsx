import { Menu } from './Menu';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
	return (
		<header className="flex sticky border-b justify-around items-center p-2">
			<img className="h-16" src="routz-logo-sf.png" alt="" />
			<Menu />
			<ThemeToggle />
		</header>
	);
}
