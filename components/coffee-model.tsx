'use client';

import { lazy, Suspense } from 'react';

const ThreeCanvas = lazy(() =>
  import('@/components/three-canvas').then((m) => ({ default: m.ThreeCanvas }))
);

export function CoffeeModel() {
  return (
    <div className="mx-auto w-full max-w-[420px] h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-[1.5rem] border border-gold/15 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.18),transparent_55%)] p-3 shadow-luxe">
      <Suspense
        fallback={
          <div className="w-full h-full rounded-[1.25rem] flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border border-gold/30 border-t-gold animate-spin" />
          </div>
        }
      >
        <ThreeCanvas />
      </Suspense>
    </div>
  );
}
