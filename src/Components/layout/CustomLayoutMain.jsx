import cancelPng from '../../assets/icons/Cancel.png';
import { Link } from 'react-router-dom';

export default function CustomLayoutMain() {
	return (
		<main className="w-full bg-[#151515] mt-[122px]">
			<div className="container max-w-[1200px] px-[20px] h-full mx-auto">
				<div className="w-full justify-between grid grid-cols-1 
				md:grid-cols-2 gap-[20px]">
					<Link to="/" state={{ scrollTo: 'menu' }}>
						<div className="w-full h-[135px] sm:h-[200px] flex justify-center items-center border-dotted border-3 border-white rounded-2xl">
							<img src={cancelPng} alt="" className='rotate-45' />
						</div>
					</Link>

				</div>
			</div>
		</main>
	)
}