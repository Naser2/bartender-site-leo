"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import Image from "next/image";

interface DrinkCardProps {
  drink: {
    id: string;
    name: string;
    description: string;
    ingredients: string[];
    price: string;
    image: string;
    category: string;
    alcoholContent?: string;
    story?: string;
  };
}

export function DrinkCard({ drink }: DrinkCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className="glass-morphism hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
          isPressable
          onPress={onOpen}
        >
          <CardBody className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={drink.image}
                alt={drink.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3">
                <span className="glass-morphism px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {drink.category}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="afro-gold text-2xl font-bold">
                  {drink.price}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {drink.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                {drink.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {drink.ingredients.slice(0, 3).map((ingredient) => (
                  <span
                    key={ingredient}
                    className="text-xs px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                  >
                    {ingredient}
                  </span>
                ))}
                {drink.ingredients.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-600/50 text-gray-300">
                    +{drink.ingredients.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </CardBody>

          <CardFooter className="px-6 pb-6">
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:shadow-lg hover:shadow-yellow-400/25"
            >
              View Details
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Drink Details Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        className="glass-morphism"
        backdrop="blur"
        scrollBehavior="inside"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                <h2 className="text-2xl font-bold">{drink.name}</h2>
                <div className="flex items-center gap-4">
                  <span className="afro-gold text-xl font-bold">
                    {drink.price}
                  </span>
                  <span className="text-sm text-gray-400">
                    {drink.category}
                  </span>
                  {drink.alcoholContent && (
                    <span className="text-sm text-gray-400">
                      ABV: {drink.alcoholContent}
                    </span>
                  )}
                </div>
              </ModalHeader>

              <ModalBody className="py-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={drink.image}
                      alt={drink.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold afro-green mb-2">
                      Description
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {drink.description}
                    </p>
                  </div>

                  {drink.story && (
                    <div>
                      <h3 className="text-lg font-semibold afro-violet mb-2">
                        The Story
                      </h3>
                      <p className="text-gray-300 leading-relaxed italic">
                        {drink.story}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold afro-gold mb-3">
                      Ingredients
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {drink.ingredients.map((ingredient) => (
                        <div
                          key={ingredient}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                          <span className="text-sm text-gray-300">
                            {ingredient}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold"
                  onPress={onClose}
                >
                  Order This Drink
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
