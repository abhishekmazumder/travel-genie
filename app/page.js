import Link from 'next/link';
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-500'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>TravelGenie</h1>
          <p className='py-6 text-lg leading-loose'>
          'TravelGenie: Your own intelligent travel companion. Powered by OpenAI, it enhances your conversations, help you discover new places and more!'
          </p>
          <Link href='/chat' className='btn btn-secondary '>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;