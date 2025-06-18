// media
import phonePng from '../../assets/icons/Phone.png';
import instagramPng from '../../assets/icons/Instagram.png';
import facebookPng from '../../assets/icons/Facebook.png';
import twitterPng from '../../assets/icons/Twitter.png';
// UI
import Logo from '../UI/Logo';

export default function Footer() {
	return (
		<footer className="mt-[100px] w-full h-[181px] bg-[#D9D9D9] ">
			<div className="container max-w-[1200px] px-[20px] h-full mx-auto flex justify-between items-start">
				<div className="flex flex-col justify-around items-start gap-[25px] mt-[15px]">
					<Logo Black={true} />
					<p className='text-[#414141] sm:text-[23px] text-[18px]'>© 2025 Coffee Club</p>
				</div>
				<div className="mt-[30px] flex flex-col justify-around items-end gap-[25px]">
					<div className="flex justify-between items-center gap-[10px]">
						<img src={phonePng} alt="" />
						<p className='text-black sm:text-[30px] text-[20px]'>+7 (777) 974 63-77</p>
					</div>
					<div className="flex justify-between items-center sm:gap-[30px] gap-[10px] mt-[10px]">
						<a href="">
							<img src={instagramPng} alt="" />
						</a>
						<a href="">
							<img src={facebookPng} alt="" />
						</a><a href="">
							<img src={twitterPng} alt="" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}