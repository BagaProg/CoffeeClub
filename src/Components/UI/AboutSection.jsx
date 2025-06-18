import { useTranslation } from 'react-i18next';

export default function AboutSection({ imgLink, text }) {
	const { t } = useTranslation();

	return (
		<div className="w-[272px] h-[211px] shadow-[0px_0px_12px_rgba(255,255,255,0.2)] p-[15px] rounded-2xl">
			<div className="w-full mb-[10px]">
				<img src={imgLink} alt="" />
			</div>
			<div className="w-full font-semibold text-[20px]">
				<p>{t(`${text}`)}</p>
			</div>
		</div>
	);
}