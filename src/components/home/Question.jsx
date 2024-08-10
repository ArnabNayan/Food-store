

const Question = () => {
    return (
        <div>
           <h1 data-aos="fade-up" data-aos-duration="1000" className="text-center text-2xl lg:text-4xl text-amber-500 mt-5 font-serif font-bold">
                ------About Us------
            </h1>
            <div className="flex flex-col-reverse lg:flex-row mt-3 bg-slate-700 bg-opacity-5">
              <div data-aos="fade-up-right" data-aos-duration="2000" className="w-full lg:w-1/2">
              <div className="collapse collapse-arrow  bg-amber-500 bg-opacity-75">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl text-white font-medium">What is Foodizone, and how did it start?</div>
  <div className="collapse-content">
    <p className="text-white font-serif">Foodizone is a vibrant online platform dedicated to food lovers. It was founded by a group of passionate food enthusiasts who wanted to create a space where people could discover delicious recipes, explore different cuisines, and order their favorite meals from local restaurants. Our journey began with a simple idea: to make good food easily accessible to everyone. Over the years, we have grown into a community of foodies who share a love for culinary adventures.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-amber-500 bg-opacity-75 ">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl text-white font-medium">What makes Foodizone different from other food platforms?</div>
  <div className="collapse-content">
    <p className="text-white font-serif">At Foodizone, we believe in quality and variety. Unlike other platforms, we focus not only on delivering food but also on educating our users about different cuisines and healthy eating habits. We collaborate with top chefs and local restaurants to bring you a diverse range of dishes, from comfort food to gourmet delicacies. Our unique feature is the community-driven recipe section, where users can share their own recipes and cooking tips, making Foodizone a true culinary hub.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-amber-500 bg-opacity-75">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl text-white font-medium">How does Foodizone ensure the quality and safety of the food?</div>
  <div className="collapse-content">
    <p className="text-white font-serif">We take food safety and quality very seriously at Foodizone. All our partner restaurants and food vendors undergo a rigorous selection process to ensure they meet our high standards. We regularly inspect their kitchens and ingredients to maintain hygiene and freshness. Additionally, we have a dedicated customer service team that addresses any concerns or issues promptly. Our goal is to provide our customers with delicious, safe, and high-quality food every time they order from us.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-amber-500 bg-opacity-75">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl text-white font-medium">What kind of services does Foodizone offer?</div>
  <div className="collapse-content">
    <p className="text-white font-serif">Foodizone offers a wide range of services to cater to all your food-related needs. Our primary service is food delivery, where you can order meals from a variety of local restaurants and have them delivered to your doorstep. We also provide a curated collection of recipes, cooking tips, and meal planning guides for those who love to cook at home. Additionally, we host virtual cooking classes and food events, connecting food enthusiasts from around the world.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-amber-500 bg-opacity-75">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl text-white font-medium">How can I get involved with Foodizones community?</div>
  <div className="collapse-content">
    <p className="text-white font-serif">Getting involved with Foodizones community is easy and rewarding. You can start by signing up for our newsletter to receive the latest updates, recipes, and special offers. If you love cooking, you can share your recipes on our platform and gain recognition from fellow food lovers. We also encourage you to participate in our virtual cooking classes and events. Follow us on social media to stay connected and join the conversation about all things food!</p>
  </div>
</div>
</div>
           

<div data-aos="fade-up-left" data-aos-duration="2000" className="w-full lg:w-1/2 ">
  <img src="https://st5.depositphotos.com/23645748/61932/i/450/depositphotos_619323030-stock-photo-gourmet-fresh-delicious-homemade-hamburger.jpg"className="w-full h-full object-cover " 
    style={{objectFit: 'cover'}}
 alt="" />
</div>
</div>     
            
        </div>
    );
};

export default Question;