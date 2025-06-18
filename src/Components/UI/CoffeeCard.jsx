import BuyButton from "./BuyButton"
import { useTranslation } from 'react-i18next';

// Вот это компонент карточки кофе, который отображает изображение, название, описание, цену и массу кофе. Он также включает кнопку "Добавить в корзину".
export default function CoffeeCard({ imgLink, title, description, price, mass, bottom }) {
	const { t } = useTranslation();

	return (
		<div className="relative w-[283px] h-[423px] md:w-[355px] md:h-[500px] bg-[#D9D9D9] rounded-[20px] p-[8px] flex flex-col justify-between items-start shadow-[0px_0px_12px_rgba(255,255,255,0.2)]">
			<div className="w-full h-[181px] md:h-[214px] rounded-[15px] overflow-hidden">
				<img src={imgLink} alt="" className="w-full h-[266px] sm:h-[333px] object-cover relative" style={{ bottom: `${bottom}px` }} />
			</div>
			<div className="w-full flex flex-col justify-between">
				<div className="flex justify-between items-center">
					<div className="w-80% mb-[10px] ">
						<div className="w-full text-left font-extrabold text-[20px] mt-[-10px]">
							<p className="black">{price}</p>
						</div>
						<div className="text-left font-semibold text-[27px] underline">
							<p className="black">{t(`${title}`)}</p>
						</div>
					</div>
					<div className="w-20% text-right text-[20px] font-regular italic md:mr-[10px] mb-[20px]">
						<p className="black">{mass}</p>
					</div>
				</div>
				<div className="opacity-64 text-[16px] text-left font-semibold">
					<p className="black">{t(`${description}`)}</p>
				</div>
			</div>
			<BuyButton text={t("Add to Cart")} className="" />
		</div>
	)
}
