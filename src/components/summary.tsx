import { FC } from 'react';
import { AnimateCount } from '@/components/ui/animate-count';
import { motion } from 'motion/react';
import { ArrowBigLeftDash } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface SummaryProps {
	calories?: number;
	carbohydrates?: number;
	fat?: number;
	protein?: number;
	onGoBack: () => void;
}

export const Summary: FC<SummaryProps> = ({ calories = 0, carbohydrates = 0, fat = 0, protein = 0, onGoBack }) => (
	<div className="flex flex-col gap-4">
		<motion.div
			initial={{ scale: 0.6, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 0.25, duration: 0.5, bounce: 0.325, type: 'spring', ease: [0.31, 0.34, 0.34, 1] }}
			className="origin-center select-text flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg justify-center text-center"
		>
			<div className="flex flex-col">
				<p className="text-muted-foreground text-xs">Maintenance Calories</p>
				<p className="text-xl font-semibold">
					<AnimateCount to={calories} duration={3} ease={[0.31, 0.34, 0.34, 1]} /> kcal
				</p>
			</div>
		</motion.div>

		<div className="grid sm:grid-cols-3 gap-4">
			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0.3, filter: 'blur(4px)' }}
				animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
				transition={{ delay: 0.75, duration: 0.5, bounce: 0.325, type: 'spring', ease: [0.31, 0.34, 0.34, 1] }}
				className="origin-center select-text flex flex-col justify-center bg-blue-100 dark:bg-blue-950 dark:bg-opacity-75 p-4 rounded-lg text-center"
			>
				<p className="text-xs text-blue-600 dark:text-blue-400">Carbs</p>
				<p className="text-xl font-semibold text-blue-900 dark:text-blue-200">
					<AnimateCount to={carbohydrates} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0.3, filter: 'blur(4px)' }}
				animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
				transition={{ delay: 1, duration: 0.5, bounce: 0.325, type: 'spring', ease: [0.31, 0.34, 0.34, 1] }}
				className="origin-center select-text flex flex-col justify-center bg-rose-100 dark:bg-rose-950 dark:bg-opacity-75 p-4 rounded-lg text-center"
			>
				<p className="text-xs text-rose-600 dark:text-rose-400">Fat</p>
				<p className="text-xl font-semibold text-rose-900 dark:text-rose-200">
					<AnimateCount to={fat} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0.3, filter: 'blur(4px)' }}
				animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
				transition={{ delay: 1.25, duration: 0.5, bounce: 0.325, type: 'spring', ease: [0.31, 0.34, 0.34, 1] }}
				className="origin-center select-text flex flex-col justify-center bg-orange-100 dark:bg-orange-950 dark:bg-opacity-75 p-4 rounded-lg text-center"
			>
				<p className="text-xs text-orange-600 dark:text-orange-400">Protein</p>
				<p className="text-xl font-semibold text-orange-900 dark:text-orange-200">
					<AnimateCount to={protein} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>
		</div>

		<Button className="mt-4 w-fit" variant="secondary" onClick={onGoBack}>
			<ArrowBigLeftDash className="mr-1 h-6 w-6" />
			Go To Calculator
		</Button>
	</div>
);
