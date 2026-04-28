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
	MessageSquare,
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
	{ title: 'Instagram', href: 'https://www.instagram.com/bearmedia70/', icon: Instagram },
	{ title: 'YouTube', href: 'https://www.youtube.com/@bearmedia70', icon: Youtube },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/garrylynch', icon: Linkedin },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Services',
		links: [
			{ title: 'Web Design', href: '/#how-it-works' },
			{ title: 'Social Media', href: '/#how-it-works' },
			{ title: 'Training', href: '/training' },
			{ title: 'Visibility System', href: '/#how-it-works' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'About', href: '/#about' },
			{ title: 'Case Studies', href: '/#work' },
			{ title: 'YouTube', href: 'https://www.youtube.com/@bearmedia70' },
		],
	},
	{
		label: 'Contact',
		links: [
			{ title: '+44 7879 011860', href: 'tel:+447879011860', icon: Phone },
			{ title: 'info@bear-media.com', href: 'mailto:info@bear-media.com', icon: Mail },
			{ title: 'Discovery Call', href: 'https://calendly.com/bearmedia/discovery-call', icon: ArrowUpRight },
			{ title: 'WhatsApp Now', href: 'https://wa.me/447879011860', icon: MessageSquare },
		],
	},
];

export default function Footer() {
	return (
		<footer className="relative bg-neutral-950 border-t border-white/10 py-24 px-6 md:px-12 overflow-hidden">
			<div className="max-w-6xl mx-auto relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
					{/* Brand Column */}
					<div className="space-y-8 col-span-1 lg:col-span-1">
						<div className="flex items-center gap-4 group">
							<div className="relative w-24 h-24 transition-transform duration-500 group-hover:rotate-12">
								<Image 
									src="/bear-media-logo-stacked-white.png" 
									alt="Bear Media Logo"
									fill
									className="object-contain"
								/>
							</div>
						</div>
						
						<p className="text-white/50 text-sm leading-relaxed max-w-sm">
							Bear Media helps local businesses get visible online and turn that visibility into real leads. Get Seen. Get Leads. Grow Your Business.
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
										className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-300"
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
							<h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">{group.label}</h3>
							<ul className="space-y-4">
								{group.links.map((link) => {
									const Icon = link.icon;
									return (
										<li key={link.title}>
											<a
												href={link.href}
												className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group"
											>
												{Icon && <Icon className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />}
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
				<div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
						© 2026 Bear Media. ALL RIGHTS RESERVED.
					</p>
					<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
						<MapPin className="w-3 h-3 text-white/20" />
						BASED IN BROXBURN — SERVING SCOTLAND
					</div>
				</div>
			</div>
		</footer>
	);
}
