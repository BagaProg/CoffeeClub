
export default function Logo({ Black = false }) {
	return (
		<div className="w-[135px] h-[82px]">
			<p className="w-[135px] h-[40px] font-inter font-black text-[38px]"
				style={{ color: Black ? '#000' : '#fff' }}
			>Coffee</p>
			<p className="w-[64px] h-[32px] font-lily font-normal text-[30px] ml-auto 
			mr-[15px]"
				style={{ color: Black ? '#000' : '#fff' }}>
				Club
			</p>
		</div>
	);
}