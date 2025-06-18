import { useTranslation } from 'react-i18next';

export default function BuyButton({ onClick, text }) {
	const { t } = useTranslation();

	return (
		<button
			onClick={onClick}
			className="w-full h-[51px] md:h-[60px]  rounded-[15px] bg-[#7E5844] text-white hover:bg-[#6E4A37] transition-colors duration-300 flex items-center justify-center text-[27px] font-semibold"
		>
			{t(`${text}`)}
		</button>
	);
}