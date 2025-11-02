import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = [
    {
      name: "Premium Wireless Headphones",
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 234,
      image: "🎧",
      badge: "Sale",
    },
    {
      name: "Smart Watch Series 5",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 567,
      image: "⌚",
      badge: "Hot",
    },
    {
      name: "Organic Coffee Beans 1kg",
      price: 24.99,
      rating: 4.7,
      reviews: 189,
      image: "☕",
    },
    {
      name: "Yoga Mat Premium",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 423,
      image: "🧘",
      badge: "New",
    },
    {
      name: "Stainless Steel Water Bottle",
      price: 19.99,
      rating: 4.9,
      reviews: 891,
      image: "💧",
    },
    {
      name: "Portable Bluetooth Speaker",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 312,
      image: "🔊",
      badge: "Sale",
    },
    {
      name: "LED Desk Lamp",
      price: 34.99,
      rating: 4.5,
      reviews: 156,
      image: "💡",
    },
    {
      name: "Ergonomic Office Chair",
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 678,
      image: "🪑",
      badge: "Hot",
    },
  ];

  const categories = [
    { name: "Electronics", icon: "📱", count: 245 },
    { name: "Fashion", icon: "👕", count: 532 },
    { name: "Home & Living", icon: "🏠", count: 389 },
    { name: "Sports", icon: "⚽", count: 167 },
    { name: "Books", icon: "📚", count: 892 },
    { name: "Beauty", icon: "💄", count: 423 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Daily Choice for Quality Products
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Discover amazing deals on products you love. Shop with confidence and enjoy fast, free shipping on orders over $50.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="text-9xl animate-bounce">🛍️</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $50</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
                <p className="text-gray-600 text-sm">100% secure transactions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">↩️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day return policy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always here to help</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count} items</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest updates on new products and exclusive offers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
