"use client";
import React from "react";
import { CardsParallax, type iCardItem } from "../ui/scroll-cards";
import { motion } from "framer-motion";

const btsItems: iCardItem[] = [
	{
		title: "Meet Garry",
		description: "Founder of Bear Media. Building websites and content that help Scottish businesses get seen.",
		src: "/bts/bts_garry.jpg",
		color: "#D4A830", // Gold
		textColor: "#FFFFFF",
		tag: "Founder",
		link: "/#about"
	},
	{
		title: "Setup & Production",
		description: "Creating high-impact video and photography content for our clients",
		src: "/bts/bts_studio.jpg",
		color: "#1a1a1a", // Deep slate
		textColor: "#FFFFFF",
		tag: "Studio",
		link: "/#services"
	},
	{
		title: "Event Coverage",
		description: "Capturing the energy and stories of businesses across Scotland on stage and location.",
		src: "/bts/bts_event.jpg",
		color: "#C9A227", // Dark Gold
		textColor: "#FFFFFF",
		tag: "On-Location",
		link: "/#work"
	},
	{
		title: "Aerial Perspective",
		description: "Specialist drone videography to elevate your brand from every angle, safely and professionally.",
		src: "/bts/bts_drone.jpg",
		color: "#000000", // Black
		textColor: "#FFFFFF",
		tag: "Aerial",
		link: "https://www.youtube.com/@bearmediacontent"
	},
];

export default function BTSSection() {
	return (
		<section className="bg-dark pt-20 md:pt-32 pb-20 md:pb-60">
			<div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24 text-center">
				<motion.p 
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-brand-yellow font-black uppercase tracking-[0.4em] text-xs mb-8 italic"
				>
					THE BEAR MEDIA STORY
				</motion.p>
				
				<motion.h2 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-9xl font-black text-white italic tracking-tighter uppercase mb-12 leading-none"
				>
					Behind<br />The <span className="text-brand-yellow">Scenes</span>
				</motion.h2>
				
				<motion.p 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto italic font-medium leading-relaxed"
				>
					Real work, real results. We don't just sit behind desks. We're on the ground with our clients, capturing the stories that matter.
				</motion.p>
			</div>
			
			<CardsParallax items={btsItems} />
		</section>
	);
}
