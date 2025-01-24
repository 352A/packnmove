"use client";

import { Suspense, lazy } from "react";
import { Spinner } from "./spinner";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loader">
            <Spinner className="text-7xl text-primary" variant="bars" />
          </span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
