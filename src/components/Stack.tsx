"use client";
import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { useState, ReactNode } from 'react';

export interface CardData {
  id: number;
  img: string;
}

export interface CardDimensions {
  width: number;
  height: number;
}

export interface AnimationConfig {
  stiffness?: number;
  damping?: number;
}

export interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: CardDimensions;
  cardsData?: CardData[];
  animationConfig?: AnimationConfig;
  sendToBackOnClick?: boolean;
}

interface CardRotateProps {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: unknown, info: PanInfo) {
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
}: StackProps) {
  const defaultCards: CardData[] = [
    { id: 1, img: '/assets/images/gallery/basket-goal.jpeg' },
    { id: 2, img: '/assets/images/gallery/basketball-dunk.jpeg' },
    { id: 3, img: '/assets/images/gallery/basketball-ground.jpeg' },
    { id: 4, img: '/assets/images/gallery/basketball-training.jpeg' }
  ];

  const [cards, setCards] = useState<CardData[]>(
    cardsData.length ? cardsData : defaultCards
  );

  const sendToBack = (id: number) => {
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
                stiffness: animationConfig.stiffness || 260,
                damping: animationConfig.damping || 20
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

