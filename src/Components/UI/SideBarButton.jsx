import { useTranslation } from 'react-i18next';

export default function SideBarButton({ icon, text }) {
	const { t } = useTranslation();

	return (
		<button className="flex items-center justify-start w-full h-[45px] p-[5px] hover:bg-[#434343] rounded-md mb-[10px]">
			<div className="w-[50px] h-[45px] flex justify-start items-center">
				<img className="" src={icon} alt="" />
			</div>
			<p className="text-[27px] font-semibold">{t(`${text}`)}</p>
		</button>
	)
}