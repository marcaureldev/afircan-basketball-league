"use client";
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';

/**
 * @typedef {Object} CardData
 * @property {number} id - Unique identifier for the card
 * @property {string} img - Image source URL
 */

/**
 * @typedef {Object} CardDimensions
 * @property {number} width - Card width in pixels
 * @property {number} height - Card height in pixels
 */

/**
 * @typedef {Object} AnimationConfig
 * @property {number} stiffness - Spring stiffness (default: 260)
 * @property {number} damping - Spring damping (default: 20)
 */

/**
 * Stack component props
 * @typedef {Object} StackProps
 * @property {boolean} [randomRotation=false] - Enable random rotation
 * @property {number} [sensitivity=200] - Drag sensitivity threshold
 * @property {CardDimensions} [cardDimensions={width: 208, height: 600}] - Card dimensions
 * @property {CardData[]} [cardsData=[]] - Array of card data
 * @property {AnimationConfig} [animationConfig={stiffness: 260, damping: 20}] - Animation configuration
 * @property {boolean} [sendToBackOnClick=false] - Send card to back on click
 */

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 600 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: '/assets/images/gallery/basket-goal.jpeg' },
          { id: 2, img: '/assets/images/gallery/basketball-dunk.jpeg' },
          { id: 3, img: '/assets/images/gallery/basketball-ground.jpeg' },
          { id: 4, img: '/assets/images/gallery/basketball-training.jpeg' }
        ]
  );

  const sendToBack = id => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <img src={card.img} alt={`card-${card.id}`} className="w-full h-full object-cover pointer-events-none" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
