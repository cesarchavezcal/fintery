import Image from "next/image";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { DEPLOY_URL } from "@/lib/constants";
import { nFormatter } from "@/lib/utils";
import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import WebVitals from "@/components/home/web-vitals";
import { Github, Twitter } from "@/components/shared/icons";
import { Button } from "@/components/ui";
import { Camera, ChevronRight, LucideLoader } from "lucide-react";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <Balancer>Hello World</Balancer>
      <Button disabled>
      <LucideLoader className="mr-2 h-4 w-4 animate-spin" />

      Please wait
    </Button>
      {/* <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#DCFCE7"
          stroke="#22C55E"
        />
      </motion.svg> */}
    </>
  );
}
