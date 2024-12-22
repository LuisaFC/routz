import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export function Menu() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="space-x-4">
				<NavigationMenuItem>
					<a href="https://google.com">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Destinos
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="https://google.com">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Rotas
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="https://google.com">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Peril
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
