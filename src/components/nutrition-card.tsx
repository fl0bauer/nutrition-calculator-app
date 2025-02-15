import { FC } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { AnimateCount } from '@/components/ui/animate-count';

export interface NutritionCardProps {
	name: string;
	count: number;
	unit: string;
	color: 'zinc' | 'blue' | 'rose' | 'orange';
	animationDelay: number;
}

interface NutritionCardColorClassMap {
	container: string;
	name: string;
	count: string;
}

export const NutritionCard: FC<NutritionCardProps> = ({ name, count, unit, color, animationDelay }) => {
	const colorClassMap: Record<NutritionCardProps['color'], NutritionCardColorClassMap> = {
		zinc: {
			container: 'bg-zinc-100 dark:bg-zinc-900',
			name: 'text-muted-foreground',
			count: '',
		},
		blue: {
			container: 'bg-blue-100 dark:bg-blue-950',
			name: 'text-blue-600 dark:text-blue-400',
			count: 'text-blue-900 dark:text-blue-200',
		},
		rose: {
			container: 'bg-rose-100 dark:bg-rose-950',
			name: 'text-rose-600 dark:text-rose-400',
			count: 'text-rose-900 dark:text-rose-200',
		},
		orange: {
			container: 'bg-orange-100 dark:bg-orange-950',
			name: 'text-orange-600 dark:text-orange-400',
			count: 'text-orange-900 dark:text-orange-200',
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 15, scale: 0.3, filter: 'blur(4px)' }}
			animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0)' }}
			transition={{
				delay: animationDelay,
				duration: 0.5,
				bounce: 0.325,
				type: 'spring',
				ease: [0.31, 0.34, 0.34, 1],
			}}
			className={cn(
				'origin-center select-text flex flex-col justify-center p-4 rounded-lg text-center',
				colorClassMap[color].container,
			)}
		>
			<p className={cn('text-xs', colorClassMap[color].name)}>{name}</p>
			<p className={cn('text-xl font-semibold', colorClassMap[color].count)}>
				<AnimateCount to={count} duration={3} ease={[0.31, 0.34, 0.34, 1]} />
				{unit}
			</p>
		</motion.div>
	);
};
