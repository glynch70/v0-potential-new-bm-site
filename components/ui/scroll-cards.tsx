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
					{/* Mobile-focused dark gradient overlay for readability */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-black/20 group-hover:md:bg-black/0 transition-colors duration-500 z-10" />
				</div>

				{/* Subtle Bottom-Corner Content Overlay */}
				<div className="absolute bottom-6 right-6 z-20 flex flex-col items-end text-right max-w-[280px] md:max-w-[400px]">
					<div className="bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10">
						<h3 
							className="font-figtree font-black tracking-tighter text-base md:text-lg uppercase italic mb-2 leading-none"
							style={{ color: textColor, opacity: 0.7 }}
						>
							{title}
						</h3>
						<p
							className="font-figtree text-[13px] md:text-[14px] font-medium leading-relaxed italic"
							style={{ color: textColor, opacity: 0.6 }}
						>
							{description}
						</p>
					</div>
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
