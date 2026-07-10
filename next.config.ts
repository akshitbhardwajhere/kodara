import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@cline/sdk", "@cline/agents", "@cline/core", "@cline/llms", "@cline/shared"],
};

export default nextConfig;
