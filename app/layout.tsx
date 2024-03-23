import Navbar from '@/app/components/Navbar';
import './globals.css';

export const metadata = {
	title: 'Maple Task Manager',
	description: 'Maplestory dailies, weeklies, and timer tool',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='no-scrollbar'>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
