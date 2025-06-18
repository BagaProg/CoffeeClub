import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import '../App.css'
import SideBar from '../Components/layout/SideBar'

export default function DefaultLayout() {
	const [isOpen, setIsOpen] = useState(false)
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const menuRef = useRef(null);
	const newsRef = useRef(null);

	const [activeSection, setActiveSection] = useState("home")

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY
			const offset = window.innerHeight * 0.15

			if (newsRef.current?.offsetTop - offset <= scrollPos) {
				setActiveSection("news")
			} else if (menuRef.current?.offsetTop - offset <= scrollPos) {
				setActiveSection("menu")
			} else if (aboutRef.current?.offsetTop - offset <= scrollPos) {
				setActiveSection("about")
			} else {
				setActiveSection("home")
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollTo = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<Header
				onHomeClick={() => scrollTo(homeRef)}
				onAboutClick={() => scrollTo(aboutRef)}
				onMenuClick={() => scrollTo(menuRef)}
				onNewsClick={() => scrollTo(newsRef)}
				onProfileClick={() => setIsOpen(!isOpen)}
				activeSection={activeSection}
			/>
			<SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<main className="min-h-screen">
				<Outlet context={{ homeRef, aboutRef, menuRef, newsRef }} />
			</main>
			<Footer />
		</>
	)
}
