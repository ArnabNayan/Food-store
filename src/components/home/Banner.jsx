

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://png.pngtree.com/background/20210710/original/pngtree-food-overlooking-the-background-banner-picture-image_1055258.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-serif font-bold  text-slate-200">Special Food Shop</h1>
            <p className="mb-5 text-2xl font-serif font-semibold text-slate-400">Nice environment with delicious and pure food items,Enjoy the different tasty food from our shop.</p>
            <button className="btn btn-warning px-6 text-xl font-serif">Visit Us</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;