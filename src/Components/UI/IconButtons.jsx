import languagePng from '../../assets/icons/language.png';
import arrowBottomPng from '../../assets/icons/keyboard_arrow_down.png';
import cartPng from '../../assets/icons/Shopping cart.png';
import personPng from '../../assets/icons/person.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';


export default function IconButtons({ onProfileClick }) {
	const [isOpen, setIsOpen] = useState(false);
	const { i18n } = useTranslation()
	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className="flex justify-between items-center gap-[20px]">
			<a href="" onClick={
				(e) => e.preventDefault() || e.stopPropagation() || setIsOpen(!isOpen)
			}
				className='flex items-center relative hover:cursor-pointer hover:bg-[rgba(217,217,217,0.15)] rounded-md p-[2px] py-[5px]'>
				<img src={languagePng} alt="" />
				<img src={arrowBottomPng} alt="" className={isOpen ? 'rotate-180 transition-transform' : 'rotate-0 transition-transform'} />
				{
					isOpen && (
						<ul className="absolute w-[80px] h-[125px] bg-[#d9d9d9] rounded-[10px] flex flex-col justify-around items-center top-[45px] right-[0.5px] z-10 py-[1px]">
							<li onClick={() => changeLanguage('en')} className="text-black font-bold px-[10px] py-[5px] hover:bg-[#9D9D9D] rounded-md">ENG</li>
							<hr className='w-[60px] text-center text-black border-[1.5px]' />
							<li onClick={() => changeLanguage('kz')} className="text-black font-bold px-[10px] py-[5px] hover:bg-[#9D9D9D] rounded-md">KAZ</li>
							<hr className='w-[60px] text-center text-black border-[1.5px]' />
							<li onClick={() => changeLanguage('ru')} className="text-black font-bold px-[10px] py-[5px] hover:bg-[#9D9D9D] rounded-md">RUS</li>
						</ul>
					)
				}
			</a>
			<Link to="/cart" className='mr-[7px] hover:cursor-pointer hover:bg-[rgba(217,217,217,0.15)] rounded-md p-[5px]'>
				<img src={cartPng} alt="" />
			</Link>
			<a href="" className='hover:cursor-pointer hover:bg-[rgba(217,217,217,0.15)] rounded-md p-[3px]'
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					onProfileClick();
				}}
			>
				<img src={personPng} alt="" />
			</a>
		</div >
	);
}