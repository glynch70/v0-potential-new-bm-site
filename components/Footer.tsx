'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
	Facebook,
	Instagram,
	Linkedin,
	Youtube,
	Phone,
	Mail,
	MapPin,
	ArrowUpRight,
} from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

const socialLinks: FooterLink[] = [
	{ title: 'Facebook', href: 'https://www.facebook.com/bearmediacontentservices', icon: Facebook },
	{ title: 'Instagram', href: 'https://www.instagram.com/bear.media', icon: Instagram },
	{ title: 'YouTube', href: 'https://www.youtube.com/@bearmediacontent', icon: Youtube },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/garrylynch', icon: Linkedin },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Services',
		links: [
			{ title: 'Web Design', href: '/#services' },
			{ title: 'Social Media', href: '/#services' },
			{ title: 'Training', href: '/training' },
			{ title: 'AI Solutions', href: '/#services' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'About', href: '/#about' },
			{ title: 'Portfolio', href: '/#work' },
			{ title: 'YouTube', href: '/#youtube' },
		],
	},
	{
		label: 'Contact',
		links: [
			{ title: '+44 7879 011860', href: 'tel:+447879011860', icon: Phone },
			{ title: 'info@bear-media.com', href: 'mailto:info@bear-media.com', icon: Mail },
			{ title: 'Discovery Call', href: 'https://calendly.com/bearmedia/discovery-call', icon: ArrowUpRight },
			{ title: 'Broxburn, EH52 6PH', href: 'https://maps.google.com/?q=Broxburn+EH52+6PH', icon: MapPin },
		],
	},
];

export default function Footer() {
	return (
		<footer className="relative bg-black border-t border-white/5 py-24 px-6 md:px-12 overflow-hidden">
			{/* Brand Background Elements */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
					{/* Brand Column */}
					<div className="space-y-8 col-span-1 lg:col-span-1">
						<div className="flex items-center gap-4 group">
							<div className="relative w-16 h-16 transition-transform duration-500 group-hover:rotate-12">
								<Image 
									src="/bear-media-logo.png" 
									alt="Bear Media Logo"
									fill
									className="object-contain"
								/>
							</div>
							<div className="flex flex-col">
								<span className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">Bear</span>
								<span className="text-3xl font-black italic tracking-tighter text-brand-yellow uppercase leading-none">Media</span>
							</div>
						</div>
						
						<p className="text-white/50 text-base italic font-bold leading-relaxed max-w-sm">
							Websites and content that help Scottish businesses get seen, trusted, and contacted.
						</p>

						<div className="flex gap-4">
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<a
										key={link.title}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand-yellow hover:text-dark hover:border-brand-yellow transition-all duration-300"
									>
										{Icon && <Icon className="w-5 h-5" />}
									</a>
								);
							})}
						</div>
					</div>

					{/* Links Columns */}
					{footerLinkGroups.map((group) => (
						<div key={group.label} className="flex flex-col">
							<h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow mb-8 italic">{group.label}</h3>
							<ul className="space-y-4">
								{group.links.map((link) => {
									const Icon = link.icon;
									return (
										<li key={link.title}>
											<a
												href={link.href}
												className="text-white/40 hover:text-brand-yellow text-sm font-bold italic transition-colors flex items-center gap-2 group"
											>
												{Icon && <Icon className="w-4 h-4 text-brand-yellow group-hover:scale-110 transition-transform" />}
												{link.title}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Bar */}
				<div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-[10px] font-black uppercase tracking-widest text-white/20">
						© 2026 Bear Media. ALL RIGHTS RESERVED.
					</p>
					<div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 italic">
						<MapPin className="w-3 h-3 text-brand-yellow" />
						BASED IN BROXBURN — SERVING SCOTLAND
					</div>
				</div>
			</div>
		</footer>
	);
}
