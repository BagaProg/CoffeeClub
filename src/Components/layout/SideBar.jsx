// media
import cancelPng from '../../assets/icons/Cancel.png';
import accountPng from '../../assets/icons/person.png';
import ourCafesPng from '../../assets/icons/Vector.png';
import friendsPng from '../../assets/icons/image 3.png';
import findJobPng from '../../assets/icons/image 2.png';
import feedbackPng from '../../assets/icons/Vector (1).png';
import helpPng from '../../assets/icons/Help circle.png';
// UI
import SideBarButton from '../UI/SideBarButton';
// React
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SideBar({ isOpen, onClose }) {
	const { t } = useTranslation();
	const [shouldRender, setShouldRender] = useState(false);
	const [animationClass, setAnimationClass] = useState('');

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
			setAnimationClass('sidebar-enter');
		} else if (shouldRender) {
			setAnimationClass('sidebar-exit');
		}
	}, [isOpen]);

	const handleAnimationEnd = () => {
		if (!isOpen) {
			setShouldRender(false);
		}
	};

	if (!shouldRender) return null;

	return (
		<section
			className={`fixed top-0 right-0 h-screen w-[400px] z-50 p-[25px] bg-[#151515] 
      shadow-[0_0_10px_rgba(0,0,0,0.5)] ${animationClass}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className="flex items-center justify-between text-white">
				<div className="flex justify-start gap-[10px] items-center w-[190px] h-[55px] font-semibold">
					<div className="w-[55px] h-[55px] rounded-full bg-[#d9d9d9] overflow-hidden" />
					<div className="flex flex-col justify-start items-start">
						<p className="text-[25px] -mb-[2.5px]">Alexander</p>
						<p className="text-[20px] opacity-50 -mt-[2.5px]">{t('client')}</p>
					</div>
				</div>
				<button onClick={onClose} className='hover:bg-[#434343] rounded-md p-[10px]'>
					<img src={cancelPng} alt="Close sidebar" />
				</button>
			</div>
			<div className="mt-[27px]">
				<SideBarButton icon={accountPng} text={t("Account")} />
				<hr className='w-full text-center text-white border-[1.8px] my-[10px]' />
				<SideBarButton icon={ourCafesPng} text={t("Our Cafes")} />
				<SideBarButton icon={friendsPng} text={t("Friends")} />
				<SideBarButton icon={findJobPng} text={t("Find a job")} />
				<SideBarButton icon={feedbackPng} text={t("FeedBack")} />
				<SideBarButton icon={helpPng} text={t("Help")} />
			</div>
		</section>
	);
}
