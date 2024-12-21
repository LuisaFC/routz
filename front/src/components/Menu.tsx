import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar';
export function Menu() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Destinos</MenubarTrigger>
				<MenubarTrigger>Rotas</MenubarTrigger>
				<MenubarTrigger>Perfil</MenubarTrigger>
			</MenubarMenu>
		</Menubar>
	);
}
