'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import {
	Facebook,
	Instagram,
	Linkedin,
	Youtube,
	Phone,
	Mail,
	MapPin,
} from 'lucide-react';
import { Button } from './button';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-[720px] w-full', className)}
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
			{...props}
		>
			<div className="fixed bottom-0 h-[720px] w-full">
				<div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t border-white/10 px-4 py-8 md:px-12 bg-black">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,#FFD700_0,hsla(0,0%,55%,.02)_50%,#B58416_80%)] absolute top-0 left-0 h-[320px] w-[640px] -translate-y-[50%] -rotate-45 rounded-full opacity-10" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,#FF6B35_0,#B58416_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[320px] [translate:5%_-50%] -rotate-45 rounded-full opacity-5" />
						</div>
						<div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10">
							<AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-6">
								<div className="flex items-center gap-2">
									<span className="text-3xl font-black italic tracking-tighter text-white uppercase">Bear</span>
									<span className="text-3xl font-black italic tracking-tighter text-brand-yellow uppercase">Media</span>
								</div>
								<p className="text-white/60 mt-8 text-lg italic font-medium leading-relaxed">
									Websites and social media content that help Scottish businesses get seen, trusted, and contacted.
								</p>
								<div className="flex gap-4">
									{socialLinks.map((link) => (
										<a
											key={link.title}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={link.title}
										>
											<Button size="icon" variant="outline" className="size-10 border-white/10 hover:bg-brand-yellow hover:text-dark hover:border-brand-yellow transition-all rounded-full">
												<link.icon className="size-5" />
											</Button>
										</a>
									))}
								</div>
							</AnimatedContainer>
							<div className="flex flex-col md:flex-row gap-12 w-full justify-end relative z-10">
								{footerLinkGroups.map((group, index) => (
									<AnimatedContainer
										key={group.label}
										delay={0.1 + index * 0.1}
										className="min-w-[150px]"
									>
										<div className="mb-10 md:mb-0">
											<h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow mb-6 italic">{group.label}</h3>
											<ul className="text-white/40 space-y-4 text-sm font-bold italic">
												{group.links.map((link) => (
													<li key={link.title}>
														<a
															href={link.href}
															className="hover:text-brand-yellow inline-flex items-center transition-all duration-300"
														>
															{link.icon && <link.icon className="me-2 size-4 text-brand-yellow" />}
															{link.title}
														</a>
													</li>
												))}
											</ul>
										</div>
									</AnimatedContainer>
								))}
							</div>
						</div>
						<div className="text-white/20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 pb-4 text-xs font-black uppercase tracking-widest md:flex-row relative z-10">
							<p>© 2026 Bear Media. All rights reserved.</p>
							<p>Broxburn, West Lothian, Scotland</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Facebook', href: 'https://www.facebook.com/bearmedia70', icon: Facebook },
	{ title: 'Instagram', href: 'https://www.instagram.com/bearmedia70/', icon: Instagram },
	{ title: 'YouTube', href: 'https://www.youtube.com/@bearmedia70', icon: Youtube },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/bearmedia70', icon: Linkedin },
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
			{ title: 'Book a discovery call', href: 'https://calendly.com/bearmedia/discovery-call', icon: Phone },
			{ title: 'Broxburn, EH52 6PH', href: 'https://maps.google.com/?q=Broxburn+EH52+6PH', icon: MapPin },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div {...(props as any)}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
