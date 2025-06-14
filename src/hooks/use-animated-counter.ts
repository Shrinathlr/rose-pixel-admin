
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useAnimatedCounter = (endValue: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentCount = Math.min((progress / duration) * endValue, endValue);
        setCount(currentCount);
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, endValue, duration]);

  return { ref, count };
};
