import type { LucideIcon } from 'lucide-react'
import {
	BookOpen,
	MonitorSmartphone,
	Star,
	ScrollText,
	KeyRound,
	Puzzle,
	Gem,
	Wrench,
} from 'lucide-react'

export interface NavigationItem {
	key: string
	path: string
	icon: LucideIcon
	isContentType: boolean
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'platforms', path: '/platforms', icon: MonitorSmartphone, isContentType: true },
	{ key: 'review', path: '/review', icon: Star, isContentType: true },
	{ key: 'dlc', path: '/dlc', icon: ScrollText, isContentType: true },
	{ key: 'codes', path: '/codes', icon: KeyRound, isContentType: true },
	{ key: 'puzzles', path: '/puzzles', icon: Puzzle, isContentType: true },
	{ key: 'collectibles', path: '/collectibles', icon: Gem, isContentType: true },
	{ key: 'technical', path: '/technical', icon: Wrench, isContentType: true },
]

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
