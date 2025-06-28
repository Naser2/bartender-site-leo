"use client";

import { motion } from "framer-motion";
import { useState, useTransition, Suspense } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { PageWrapper } from "@/components/PageWrapper";
import { DrinkCard } from "@/components/DrinkCard";

const signatureDrinks = [
  {
    id: "1",
    name: "Afrobeat Sunset",
    description:
      "A vibrant mix of passion fruit, mango, and premium rum with a hint of hibiscus. This cocktail captures the essence of a Lagos sunset.",
    ingredients: [
      "Passion Fruit",
      "Mango Puree",
      "Premium Rum",
      "Hibiscus Tea",
      "Lime Juice",
      "Simple Syrup",
    ],
    price: "$18",
    image: "/IMG_6829.JPG",
    category: "Signature",
    alcoholContent: "14%",
    story:
      "Inspired by the golden hour views from Victoria Island, this drink tells the story of the day transitioning into the vibrant Lagos nightlife.",
  },
  {
    id: "2",
    name: "Lagos Lightning",
    description:
      "An electrifying cocktail with ginger beer, premium vodka, and a spicy kick that embodies the energy of Lagos streets.",
    ingredients: [
      "Premium Vodka",
      "Ginger Beer",
      "Scotch Bonnet Infusion",
      "Cucumber",
      "Mint",
      "Lime",
    ],
    price: "$16",
    image: "/IMG_6824.JPG",
    category: "Spicy",
    alcoholContent: "18%",
    story:
      "Born from the bustling energy of Lagos markets, this drink delivers the same electric excitement found in Nigerian street culture.",
  },
  {
    id: "3",
    name: "Eko Elegance",
    description:
      "A sophisticated blend of whisky, honey, and traditional palm wine, finished with a touch of kola nut essence.",
    ingredients: [
      "Single Malt Whisky",
      "Palm Wine",
      "Honey",
      "Kola Nut Essence",
      "Orange Bitters",
      "Cinnamon",
    ],
    price: "$22",
    image: "/IMG_6827.JPG",
    category: "Premium",
    alcoholContent: "20%",
    story:
      "A tribute to the ancient city of Lagos (Eko), blending traditional flavors with modern sophistication.",
  },
  {
    id: "4",
    name: "Rhythm & Blues",
    description:
      "Smooth bourbon meets blue curaçao with blueberry notes and a jazz-inspired twist that moves to its own beat.",
    ingredients: [
      "Bourbon Whiskey",
      "Blue Curaçao",
      "Blueberries",
      "Lemon Juice",
      "Lavender Syrup",
      "Egg White",
    ],
    price: "$19",
    image: "/IMG_3282.JPG",
    category: "Classic",
    alcoholContent: "16%",
    story:
      "Created during late-night jam sessions, this drink harmonizes like the perfect melody between traditional and contemporary.",
  },
  {
    id: "5",
    name: "Tropical Thunder",
    description:
      "A storm of tropical flavors with coconut rum, pineapple, and a surprising cardamom finish.",
    ingredients: [
      "Coconut Rum",
      "Pineapple Juice",
      "Cardamom Syrup",
      "Lime Juice",
      "Toasted Coconut",
      "Bitters",
    ],
    price: "$17",
    image: "/IMG_6824.JPG",
    category: "Tropical",
    alcoholContent: "15%",
    story:
      "Inspired by the unpredictable tropical storms that bring both chaos and beauty to West African coastlines.",
  },
  {
    id: "6",
    name: "Golden Hour",
    description:
      "A golden cocktail featuring aged rum, turmeric, and ginger with a warm, spiced finish perfect for sunset vibes.",
    ingredients: [
      "Aged Rum",
      "Turmeric",
      "Fresh Ginger",
      "Honey",
      "Orange Juice",
      "Angostura Bitters",
    ],
    price: "$20",
    image: "/IMG_6829.JPG",
    category: "Wellness",
    alcoholContent: "17%",
    story:
      "Crafted to capture that magical moment when the day melts into evening, bringing warmth and reflection.",
  },
];

const categories = [
  "All",
  "Signature",
  "Spicy",
  "Premium",
  "Classic",
  "Tropical",
  "Wellness",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function DrinksContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredDrinks = signatureDrinks.filter((drink) => {
    const matchesCategory =
      selectedCategory === "All" || drink.category === selectedCategory;
    const matchesSearch =
      drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drink.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drink.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            animate="visible"
            className="text-center mb-16"
            initial="hidden"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Signature </span>
              <span className="cocktail-shimmer bg-clip-text text-transparent">
                Drinks
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Each cocktail tells a story, crafted with passion and inspired by
              Afro Pop culture. Every sip is a journey through flavors,
              traditions, and innovation.
            </p>

            {/* Search and Filter */}
            <motion.div
              className="max-w-2xl mx-auto space-y-6"
              variants={fadeInUp}
            >
              <Input
                className="glass-morphism"
                placeholder="Search drinks, ingredients, or flavors..."
                size="lg"
                startContent={<span className="text-gray-400">🔍</span>}
                type="text"
                value={searchTerm}
                onValueChange={setSearchTerm}
              />

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold"
                        : "border-white/30 text-white hover:border-yellow-400 hover:text-yellow-400"
                    }
                    isLoading={isPending && selectedCategory !== category}
                    variant={
                      selectedCategory === category ? "solid" : "bordered"
                    }
                    onPress={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Drinks Grid */}
          <motion.div
            key={selectedCategory} // Re-trigger animation when category changes
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            variants={staggerContainer}
          >
            {filteredDrinks.map((drink) => (
              <motion.div key={drink.id} variants={fadeInUp}>
                <DrinkCard drink={drink} />
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
          {/* Empty State */}
          {filteredDrinks.length === 0 && (
            <motion.div
              animate={{ opacity: 1 }}
              className="text-center py-16"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🍹</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No drinks found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter to discover more amazing
                cocktails.
              </p>
              <Button
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold"
                onPress={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Show All Drinks
              </Button>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            animate="visible"
            className="text-center mt-20"
            initial="hidden"
            variants={fadeInUp}
          >
            <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience These{" "}
                <span className="afro-gold">Signature Creations?</span>
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Book DJ Pourmaster for your next event and let your guests taste
                the magic of Afro Pop mixology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                  size="lg"
                  onPress={() => (window.location.href = "/contact")}
                >
                  📅 Book an Event
                </Button>
                <Button
                  className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full"
                  size="lg"
                  variant="bordered"
                  onPress={() => (window.location.href = "/about")}
                >
                  👨‍🍳 Meet the Mixologist
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function DrinksPage() {
  return (
    <PageWrapper>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                className="cocktail-shimmer w-16 h-16 rounded-full mx-auto mb-4"
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, -100],
                      opacity: [0, 1, 0],
                    }}
                    className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
              <p className="text-white">Mixing the perfect experience...</p>
            </div>
          </div>
        }
      >
        <DrinksContent />
      </Suspense>
    </PageWrapper>
  );
}
