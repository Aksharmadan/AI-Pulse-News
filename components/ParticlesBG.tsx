"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBG() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        detectRetina: true,
        particles: {
          number: { value: 120 },
          color: { value: "#00eaff" },
          opacity: {
            value: 0.35,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "bottom",
            straight: true,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
}
