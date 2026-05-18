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
	Info,
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
		label: 'Solutions',
		links: [
			{ title: 'Social Content', href: '/services/social-media-content' },
			{ title: 'Videography', href: '/services/videography' },
			{ title: 'Web Design', href: '/services/website-design' },
			{ title: 'Portfolio', href: '/portfolio' },
		],
	},
	{
		label: 'Industries',
		links: [
			{ title: 'Trades', href: '/industries/trades' },
			{ title: 'Estate Agents', href: '/industries/estate-agents' },
			{ title: 'Local SMEs', href: '/industries' },
			{ title: 'About Bear Media', href: '/about' },
		],
	},
	{
		label: 'Locations',
		links: [
			{ title: 'West Lothian', href: '/west-lothian-content-creation' },
			{ title: 'Edinburgh', href: '/edinburgh-content-creation' },
			{ title: 'Web Design W. Lothian', href: '/web-design-west-lothian' },
			{ title: 'Social Media W. Lothian', href: '/social-media-west-lothian' },
			{ title: 'Videography W. Lothian', href: '/videography-west-lothian' },
			{ title: 'Web Design Edinburgh', href: '/web-design-edinburgh' },
			{ title: 'Social Media Edinburgh', href: '/social-media-edinburgh' },
		],
	},
	{
		label: 'Growth',
		links: [
			{ title: 'Insights Blog', href: '/insights' },
			{ title: 'Pricing Guide', href: '/pricing' },
			{ title: 'Book a Call', href: '/contact', icon: ArrowUpRight },
			{ title: '07879 011860', href: 'tel:+447879011860', icon: Phone },
		],
	},
];

export default function Footer() {
	return (
		<footer className="relative bg-[#171513] border-t border-white/5 py-24 px-6 md:px-12 overflow-hidden">
			<div className="max-w-6xl mx-auto relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
					{/* Brand Column */}
					<div className="space-y-8 col-span-1 lg:col-span-1">
						<div className="flex flex-col">
							<span className="text-white font-bold text-lg leading-tight font-inter-tight">
								Bear Media
							</span>
							<span className="text-[#E8E0D5]/70 text-[10px] font-medium uppercase tracking-[0.2em] font-inter-tight">
								Websites & Social Media
							</span>
						</div>
						
						<p className="text-white text-sm leading-relaxed max-w-sm">
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
										className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
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
												className="text-white hover:text-white text-sm transition-colors flex items-center gap-2 group"
											>
												{Icon && <Icon className="w-4 h-4 text-white group-hover:text-white transition-colors" />}
												{link.title}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
 
				{/* Map Section */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-24 rounded-3xl overflow-hidden border border-white/10 h-80 relative group"
				>
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35808.64125868846!2d-3.48347895!3d55.9332214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c10b788647cf%3A0x8848417937a06c8b!2sBroxburn!5e0!3m2!1sen!2suk!4v1714432134567!5m2!1sen!2suk" 
						className="w-full h-full transition-opacity duration-700"
						style={{ border: 0 }} 
						allowFullScreen 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade"
					/>
					<div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 pointer-events-none">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 rounded-full bg-[#D9A05B] flex items-center justify-center text-[#0f0e0c]">
								<MapPin size={16} />
							</div>
							<div>
								<p className="text-[10px] font-bold uppercase tracking-widest text-white">Our Location</p>
								<p className="text-sm font-bold text-white">Broxburn, West Lothian</p>
							</div>
						</div>
					</div>
					<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#171513] via-transparent to-transparent opacity-60" />
				</motion.div>

				{/* Bottom Bar */}
				<div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-[10px] font-bold uppercase tracking-widest text-white">
						© 2026 Bear Media. ALL RIGHTS RESERVED.
					</p>
					<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white">
						<MapPin className="w-3 h-3 text-white" />
						BASED IN BROXBURN — SERVING SCOTLAND
					</div>
				</div>
			</div>
		</footer>
	);
}
