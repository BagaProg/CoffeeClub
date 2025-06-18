import CustomLayoutHeader from '../Components/layout/CustomLayoutHeader'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import SideBar from '../Components/layout/SideBar'

export default function CustomLayout() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<CustomLayoutHeader
				onProfileClick={() => setIsOpen(!isOpen)}
			/>
			<SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<main className="min-h-screen">
				<Outlet />
			</main>
		</>
	)
}
