function Hero() {
  return (
    <div>
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
      <h1 className="text-7xl font-bold text-black">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className="text-gray-600 mt-4">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
      <button className="bg-black text-white px-4 py-2 rounded-3xl w-52">Shop Now</button>
    </div>
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
        <svg src="./poster.svg" alt="poster" />
    </div>
    
    </div>
  );
}

export default Hero;