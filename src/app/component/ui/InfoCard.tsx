"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{scale:1.04}}
      className="w-full max-w-sm p-6 rounded-2xl  bg-white/6 backdrop-blur-xl border-t border-r border-white/30 text-white/90 mx-auto"
    >
      <header className="flex items-center gap-4 mb-3">
        <Image src={icon} height={30} width={30} alt={title} />
        <h4 className="font-semibold">{title}</h4>
      </header>
      <p className="font-light text-sm text-left md:text-left ">{description}</p>
    </motion.div>
  );
};

export default InfoCard;