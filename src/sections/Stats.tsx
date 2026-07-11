import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Quality Assured' },
  { value: 24, suffix: '/7', label: 'Customer Support' },
];

function AnimatedCounter({ value, suffix, triggered }: { value: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);
  const countRef = useRef({ val: 0 });

  useEffect(() => {
    if (!triggered) return;
    const obj = countRef.current;
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.round(obj.val)),
    });
  }, [triggered, value]);

  return (
    <span>{count}{suffix}</span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => setTriggered(true),
    });
    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="bg-charcoal py-16 lg:py-20">
      <div className="content-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-white/15' : ''}`}>
              <div className="font-playfair font-bold text-4xl lg:text-[56px] leading-none text-warm-sand mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} triggered={triggered} />
              </div>
              <div className="font-inter text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
