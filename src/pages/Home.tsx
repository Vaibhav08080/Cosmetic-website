import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Radiance Serum",
      price: "$42",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Hydrating Cream",
      price: "$38",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Rose Toner",
      price: "$28",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Lip Treatment",
      price: "$24",
      category: "makeup",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      link: "https://instagram.com/p/example1"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      link: "https://instagram.com/p/example2"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      link: "https://instagram.com/p/example3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      link: "https://instagram.com/p/example4"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2400&q=80" 
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-serif mb-4">Radiate Natural Beauty</h2>
            <p className="text-xl mb-8">Clean beauty products for your daily glow</p>
            <Link 
              to="/products/skincare"
              className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-medium hover:text-rose-600">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-rose-600 font-medium">{product.price}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=100&q=80" 
                  alt="Natural" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">100% Natural</h3>
              <p className="text-gray-600">Clean beauty products made with natural ingredients</p>
            </div>
            <div>
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=100&q=80" 
                  alt="Cruelty Free" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Cruelty Free</h3>
              <p className="text-gray-600">Never tested on animals, always kind to nature</p>
            </div>
            <div>
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=100&q=80" 
                  alt="Sustainable" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly packaging for a better planet</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Video Banner */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">New Arrivals</h2>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
            >
              <source src="/videos/beauty-products.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Link 
                to="/products/new-arrivals"
                className="bg-white text-rose-600 px-8 py-3 rounded-full hover:bg-rose-100 transition"
              >
                Shop New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">@BeautyStore on Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a href={post.link} target="_blank" rel="noopener noreferrer" key={post.id}
                 className="relative group overflow-hidden">
                <img src={post.image} alt="Instagram post" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-rose-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Beauty Community</h2>
          <p className="mb-8">Subscribe to get special offers, free giveaways, and beauty tips!</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full"
            />
            <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}