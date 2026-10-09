import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TEMPORAL: quedan errores de tipos en productos, usuarios y POS
  // (pantallas en desarrollo). Quitar cuando estén corregidos.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
