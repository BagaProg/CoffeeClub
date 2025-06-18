import Logo from '../UI/Logo.jsx';
import IconButtons from '../UI/IconButtons.jsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({ onHomeClick, onAboutClick, onMenuClick, onNewsClick, onProfileClick, activeSection }) {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<header className="w-full h-[82px] bg-[#151515] fixed z-30 top-0 left-0">
			<div className="container max-w-[1200px] px-[20px] h-full mx-auto flex items-center justify-between">
				<div className="flex items-center justify-start gap-[10px]">
					<button
						onClick={() => setIsBurgerOpen(!isBurgerOpen)}
						className="relative flex justify-center items-center md:hidden w-[48px] h-[48px] hover:cursor-pointer hover:bg-[rgba(217,217,217,0.15)] rounded-md"
					>
						<span className={`absolute h-[4px] w-[32px] bg-white rounded transition-transform duration-300 ease-in-out ${isBurgerOpen ? 'rotate-45 translate-y-0' : '-translate-y-[10px]'}`} />
						<span className={`absolute h-[4px] w-[32px] bg-white rounded transition-all duration-300 ease-in-out ${isBurgerOpen ? 'opacity-0' : 'opacity-100'}`} />
						<span className={`absolute h-[4px] w-[32px] bg-white rounded transition-transform duration-300 ease-in-out ${isBurgerOpen ? '-rotate-45 translate-y-0' : 'translate-y-[10px]'}`} />
					</button>

					{isBurgerOpen && (
						<div className="absolute min-w-[100px] min-h-[180px] bg-[#151515] rounded-[10px] flex flex-col justify-around items-center left-[3px] top-[70px] z-10 shadow-[0px_0px_4px_rgba(255,255,255,0.5)]">
							{[
								{ text: t(`HOME`), onClick: onHomeClick },
								{ text: t(`ABOUT`), onClick: onAboutClick },
								{ text: t(`MENU`), onClick: onMenuClick },
								{ text: t(`NEWS`), onClick: onNewsClick }
							].map((item, i, arr) => (
								<div key={item.text} className="flex flex-col items-center justify-center">
									<button
										onClick={() => {
											item.onClick();
											setIsBurgerOpen(false);
										}}
										className="px-[10px] py-[5px] text-white font-bold hover:bg-[#434343] rounded-md"
									>
										{item.text}
									</button>
									{i !== arr.length - 1 && (
										<hr className="w-[90%] border-[1.5px] mt-[5px] border-white mx-auto" />
									)}
								</div>
							))}
						</div>
					)}

					<Logo />
				</div>

				<nav className="hidden lm: gap-[30px] md:gap-[40px] md:flex md:items-center">
					<a className={`${activeSection === "home" ? "border-b-2 border-white" : ""}`} href="#" onClick={onHomeClick}>{t(`HOME`)}</a>
					<a className={`${activeSection === "about" ? "border-b-2 border-white" : ""}`} href="#" onClick={onAboutClick}>{t(`ABOUT`)}</a>
					<a className={`${activeSection === "menu" ? "border-b-2 border-white" : ""}`} href="#" onClick={onMenuClick}>{t(`MENU`)}</a>
					<a className={`${activeSection === "news" ? "border-b-2 border-white" : ""}`} href="#" onClick={onNewsClick}>{t(`NEWS`)}</a>
				</nav>
				<IconButtons onProfileClick={onProfileClick} />
			</div>
		</header>
	);
}
