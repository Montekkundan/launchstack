import Head from 'next/head'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <Head>
        <title>Next.js Tailwind Homepage</title>
        <meta name="description" content="Next.js Tailwind Homepage with noise SVG background" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 w-full h-full ">
        
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-8">Welcome to my Homepage</h1>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tellus sed libero convallis pretium.</p>
        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Get Started</button>
      </div>
    </div>
  )
}

export default Home
