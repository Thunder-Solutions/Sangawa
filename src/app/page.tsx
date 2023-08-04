import Head from 'next/head';
import MenuBar from '@/components/menuBar/menuBar';
import Page from '@/components/page/page';

const Home = () => {
	return (
		<Page>
			<Head><title>Sangawa</title></Head>
			<MenuBar />
		</Page>
	);
};

export default Home;
