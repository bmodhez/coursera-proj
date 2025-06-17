import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className="landing bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <h1 className="text-5xl font-bold mb-4 text-black">GreenGlow Houseplants</h1>
      <p className="text-lg mb-6 max-w-lg text-center text-black">Bringing nature into your home with the most vibrant, healthy houseplants you'll ever find.</p>
      <Link to="/products" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>
    </div>
  );
}

export default Landing;
