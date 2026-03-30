"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Types
interface iCardItem {
	title: string;
	description: string;
	tag?: string;
	src: string;
	link?: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ margin: "-10% 0% -10% 0%" }}
				transition={{ duration: 0.5 }}
				className="relative flex flex-col h-[400px] w-full max-w-[800px] py-12 px-10 md:px-12
				items-center justify-center mx-auto 
				shadow-2xl rounded-2xl overflow-hidden group"
				style={{ backgroundColor: color }}
			>
				{/* Background Image (Overlays Removed for Visibility) */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						src={src}
						alt={title}
						fill
						priority
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-center px-4 md:px-8">
					<h3 
						className="font-figtree font-black tracking-tighter text-4xl md:text-7xl uppercase italic mb-8 text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-[0.9]"
						style={{ color: textColor }}
					>
						{title}
					</h3>
					<p
						className="font-figtree text-base md:text-xl font-bold text-center max-w-lg leading-relaxed italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
						style={{ color: textColor }}
					>
						{description}
					</p>
				</div>
			</motion.div>
		</div>
	);
};

interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
	return (
		<div className="relative">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export { CardsParallax, type iCardItem };
