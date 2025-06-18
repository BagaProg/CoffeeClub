import Main from '../Components/layout/Main'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
	const { homeRef, aboutRef, menuRef, newsRef } = useOutletContext()
	const location = useLocation();

	useEffect(() => {
		if (location.state?.scrollTo === 'menu') {
			menuRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	return (
		<Main
			homeRef={homeRef}
			aboutRef={aboutRef}
			menuRef={menuRef}
			newsRef={newsRef}
		/>
	)
}
