import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to prevent re-triggering
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% is visible

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let transformStyle = '';
  if (!isVisible) {
    if (direction === 'up') transformStyle = 'translate-y-10';
    if (direction === 'left') transformStyle = '-translate-x-10';
    if (direction === 'right') transformStyle = 'translate-x-10';
  } else {
    transformStyle = 'translate-y-0 translate-x-0';
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100' : 'opacity-0'} ${transformStyle}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;