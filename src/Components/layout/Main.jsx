// media
import videoMp4 from '../../assets/video/Coffee_video.mp4';
import arrowUpRightWhitePng from '../../assets/icons/Arrow up-right.png';
import arrowUpRightColoredPng from '../../assets/icons/Arrow up-right_black .png';
import coffeeBeansPng from '../../assets/icons/icons8-кофейные-зерна-50 1.png';
import coffeeCupPng from '../../assets/icons/icons8-кофе-с-собой-50 1.png'
import coffeeMachinePng from '../../assets/icons/icons8-кофеварка-50 1.png'
import coffeeCafePng from '../../assets/icons/icons8-кофе-64 1.png'
import cappucinoPng from '../../assets/images/cappuccino-coffee-glass-with-croissant-wooden-tray.jpg'
import espressoPng from '../../assets/images/double-espresso-coffee-mug-with-cinnamon-sticks-coffee-beans-wooden-board.jpg'
import lattePng from '../../assets/images/milky-latte-with-chocolate-vanilla-biscuit-cookies.jpg'
import americanoPng from '../../assets/images/tasty-mug-coffee-high-view.jpg'
import mochaPng from '../../assets/images/rustic-wood-table-holds-frothy-coffee-drinks-generated-by-ai.jpg'
import frappuccinoPng from '../../assets/images/cup-coffee-with-whipped-cream-coffee-sprinkles.jpg'
import firstNewsPng from '../../assets/images/2148464819.jpg';
import secondNewsPng from '../../assets/images/2149125745.jpg';
import thirdNewsPng from '../../assets/images/world-map-fragrant-coffee-beans-white-wooden-background-traditional-drinks-top-view_187166-47656.jpg';
// UI
import TitleSection from '../UI/TitleSection.jsx';
import AboutSection from '../UI/AboutSection.jsx';
import CoffeeCard from '../UI/CoffeeCard.jsx';
import ScrollButtons from '../UI/ScrollButtons.jsx';
import NewsSection from '../UI/NewsSection.jsx';
import { coffeeData } from '../../data.js';
// React
import { useState, useRef } from 'react';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Main({ homeRef, aboutRef, menuRef, newsRef }) {
	const [hovered, setHovered] = useState(false);
	const [card, setCard] = useState(0);
	const [page, setPage] = useState(0);
	const carouselRef = useRef(null);
	const { t } = useTranslation();

	const [startX, setStartX] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const [prevTranslate, setPrevTranslate] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	const cardWidth = 300;
	const gap = 15;
	const totalCards = 6;
	const visibleCards = 1.5;

	const MAX_TRANSLATE = 0;
	const MIN_TRANSLATE = -((cardWidth + gap) * (totalCards - visibleCards));

	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
		setIsDragging(true);
	};

	const handleTouchMove = (e) => {
		if (!isDragging) return;
		const currentX = e.touches[0].clientX;
		const diff = currentX - startX;
		const rawTranslate = prevTranslate + diff;
		const clamped = Math.min(MAX_TRANSLATE, Math.max(rawTranslate, MIN_TRANSLATE));
		setCurrentTranslate(clamped);
	};

	const handleTouchEnd = () => {
		setPrevTranslate(currentTranslate);
		setIsDragging(false);
	};

	return (
		<main className="w-full bg-[#151515] mt-[82px] ">
			<video
				src={videoMp4}
				muted loop autoPlay
				className='w-full h-[530px] object-cover relative'>
			</video>
			<div className="absolute top-0 left-0 w-full h-[613px] bg-black/50 z-10"></div>
			<div className="container max-w-[1200px] px-[20px] h-full mx-auto">
				<section ref={homeRef} className="absolute top-[115px] sm:top-[190px] z-15 max-w-[563px] min-h-[363px]">
					<div className="font-semibold text-[35px]">
						<p>{t('Welcome To')}</p>
					</div>
					<div className="font-extrabold text-[60px]">
						<p>{t('COFFEE CLUB')}</p>
					</div>
					<div className="font-semibold text-[25px] opacity-60 mb-[10px]">
						<p>
							{t('where every morning starts with the aroma of freshly ground coffee, silence, cosiness and real taste.')}
						</p>
					</div>
					<a href="" className='flex items-center justify-center gap-[30px]
					text-white w-[248px] h-[76px] border-white border-1 rounded-[35px]
					hover:bg-white transition-colors duration-300 ease-in-out 
						hover:shadow-[0px_0px_4px_rgba(255,255,255,0.1)] group backdrop-blur-2xl'
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img src={hovered ? arrowUpRightColoredPng : arrowUpRightWhitePng} alt="" />
						<li className='font-semibold text-[35px] group-hover:text-black '>{t("MORE")}</li>
					</a>
				</section>
				<section ref={aboutRef}>
					<TitleSection firstTitle={t('Your Personalized Coffee')} secondTitle={t("COFFEE BUILD YOUR BASE")} />
					<div className="max-w-[1200px] min-h-[211px] grid items-center justify-items-center grid-cols-1 
				sm:grid-cols-2 xl:grid-cols-4 gap-y-[30px]"
					>
						<AboutSection imgLink={coffeeBeansPng} text={
							t('Our coffee beans are of the highest quality, ensuring a rich and flavorful experience.')
						} />
						<AboutSection imgLink={coffeeCupPng} text={
							t('Fast and reliable delivery ensures you get your coffee fresh and on time.')
						} />
						<AboutSection imgLink={coffeeMachinePng} text={
							t('The taste of our coffee is rich, smooth, and absolutely delightful.')
						} />
						<AboutSection imgLink={coffeeCafePng} text={
							t('Our cozy cafe offers a warm and inviting atmosphere for everyone.')
						} />
					</div>
				</section>
				<section ref={menuRef}>
					<TitleSection firstTitle={t("Choose Your Favourite")} secondTitle={t("DRINKS & FOODS")} />
					<div
						className="w-full overflow-hidden"
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<div
							className="flex gap-[15px] transition-transform duration-300"
							style={{ transform: `translateX(${currentTranslate + card - page}px)` }}
						>
							{coffeeData.map((data, index) => (
								<div
									key={index}
									className="w-[283px] md:w-[355px] flex-shrink-0"
								>
									<CoffeeCard
										className="black"
										{...data}
										imgLink={[
											cappucinoPng,
											espressoPng,
											lattePng,
											americanoPng,
											mochaPng,
											frappuccinoPng,
										][index]}
									/>
								</div>
							))}
						</div>
					</div>
					<ScrollButtons card={card} setCard={setCard} setPage={setPage} page={page} />
				</section>
				<section ref={newsRef} >
					<TitleSection firstTitle={t("A New Look at the")} secondTitle={t("WORLD OF COFFEE TRENDS")} />
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center items-center">
						<NewsSection newsPhoto={firstNewsPng} newsText={
							t('The Philippine Coffee Council, in partnership with GCash, plans to change the landscape of coffee cultivation. They propose new approaches to developing the coffee industry in the Philippines')} />
						<NewsSection newsPhoto={secondNewsPng} newsText={
							t('The final stage of the project to develop a decaffeinated Arabica variety has begun. A Brazilian research institute has been working on this project for twenty years, and it is now nearing completion')
						} />
						<NewsSection newsPhoto={thirdNewsPng} newsText={
							t('Saudi Arabia has officially joined the International Coffee Organization (ICO). This event occurred on February 20 of this year and may have a significant impact on the international coffee market')
						} />
					</div>
				</section>
			</div>
		</main>
	);
}