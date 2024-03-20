import Navbar from '@/app/components/navbar';
import './globals.css';

export const metadata = {
	title: 'Maple Task Manager',
	description: 'All in one maplestory progression tool',
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
