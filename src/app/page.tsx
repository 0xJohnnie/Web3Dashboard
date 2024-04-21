import { Welcome } from '@components/Welcome';
import { _cssTitle } from '@utils/constant';

import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const Home = () => {
  return <Welcome />;
};
export default Home;
