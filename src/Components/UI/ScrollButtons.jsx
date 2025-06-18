// media
import arrowPng from '../../assets/icons/Arrow right-circle.png';
// react
import { useState } from 'react';

export default function ScrollButtons({ setCard, setPage, card, page }) {
	const [isClicked, setIsClicked] = useState(0)

	function clickForSecond(number) {
		setIsClicked(number)
		setTimeout(() => {
			setIsClicked(0)
		}, 500)
	}

	return (
		<div className='flex justify-between items-center w-[274px] h-[40px] mx-auto mt-[25px]'>
			<div className={`${isClicked == 1 ? 'shadow-[0_0_10px_rgba(255,255,255,0.5)]' : ''} rounded-full flex justify-center items-center transition-shadow delay-100 ease-in-out`}>
				<button onClick={() => {
					setCard(card + 330)
					clickForSecond(1)
				}}>
					<img src={arrowPng} alt="" />
				</button>
			</div>
			<div className="flex justify-between items-center gap-[10px]">
				<button
					onClick={() => setPage(600)}
					className={`w-[36px] h-[36px] flex justify-center items-center rounded-full ${page <= 600 ? 'bg-[#955E40]' : 'bg-[#D0D0D0]'}`}>
					<p className={`${page <= 600 ? 'text-white' : 'text-black'}  text-[30px] font-semibold`}>1</p>
				</button>
				<button
					onClick={() => setPage(1200)}
					className={`w-[36px] h-[36px] flex justify-center items-center rounded-full ${page == 1200 ? 'bg-[#955E40]' : 'bg-[#D0D0D0]'}`}>
					<p className={`${page == 1200 ? 'text-white' : 'text-black'}  text-[30px] font-semibold`}>2</p>
				</button>
				<button
					onClick={() => setPage(1800)}
					className={`w-[36px] h-[36px] flex justify-center items-center rounded-full ${page >= 1800 ? 'bg-[#955E40]' : 'bg-[#D0D0D0]'}`}>
					<p className={`${page >= 1800 ? 'text-white' : 'text-black'}  text-[30px] font-semibold`}>3</p>
				</button>
			</div>
			<div className={`${isClicked == 2 ? 'shadow-[0_0_10px_rgba(255,255,255,0.5)]' : ''} rounded-full flex justify-center items-center transition-shadow delay-100 ease-in-out`}>
				<button onClick={() => {
					setCard(card - 330)
					clickForSecond(2)
				}}>
					<img src={arrowPng} alt="" className='rotate-180' />
				</button>
			</div>
		</div>
	)
}