import { useTranslation } from 'react-i18next';

export default function TitleSection({ firstTitle, secondTitle }) {
	const { t } = useTranslation();

	return (
		<div className="w-full h-[77px] mx-auto mt-[95px] mb-[80px] text-white text-center">
			<div className="text-[23px] sm:text-[30px] text-center font-semibold">{t(`${firstTitle}`)}</div>
			<div className="text-[27px] sm:text-[45px] text-center font-semibold">{t(`${secondTitle}`)}</div>
		</div>
	)
}