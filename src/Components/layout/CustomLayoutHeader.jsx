import Logo from '../UI/Logo.jsx';
import CustomLayoutIconButtons from '../UI/CustomLayoutIconButtons.jsx';
import { useState } from 'react';

export default function Header({ onHomeClick, onAboutClick, onMenuClick, onNewsClick, onCartClick, onProfileClick }) {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	return (
		<header className="w-full h-[82px] bg-[#151515] fixed z-30 top-0 left-0">
			<div className="container max-w-[1200px] px-[20px] h-full mx-auto flex 
			items-center justify-between">
				<Logo />
				<CustomLayoutIconButtons onProfileClick={onProfileClick} />
			</div>
		</header>
	);
}
