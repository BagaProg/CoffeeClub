import { useTranslation } from 'react-i18next';

export default function NewsSection({ newsPhoto, newsText }) {
	const { t } = useTranslation();

	return (
		<div className="w-[314px] h-[392px] md:w-[360px] md:h-[450px] bg-[#1A1A1A] rounded-[20px] p-[10px] flex flex-col 
		justify-start items-center mx-auto hover:transform hover:translate-y-[-10px] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(255,255,255,0.3)] hover:cursor-pointer
		">
			<div className="w-full h-45% rounded-[10px] overflow-hidden mb-[25px]">
				<img src={newsPhoto} alt="" className="w-full h-full" />
			</div>
			<div className="text-18px md:text-[20px] font-semibold text-white leading-[27px]">
				<p>{t(`${newsText}`)}</p>
			</div>
		</div>
	)
}