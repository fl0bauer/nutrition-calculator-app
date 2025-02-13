import { FC } from 'react';
import { Dumbbell } from 'lucide-react';
import { AnimateCount } from '@/components/ui/animate-count';
import { motion } from 'motion/react';

export interface SummaryProps {
	calories: number;
	carbohydrates: number;
	fat: number;
	proteins: number;
}

export const Summary: FC<SummaryProps> = ({ calories, carbohydrates, fat, proteins }) => (
	<div className="flex flex-col gap-4">
		<motion.div
			initial={{ scale: 0.6, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 0.25 }}
			className="flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg"
		>
			<Dumbbell className="size-6 text-muted-foreground" />
			<div className="flex flex-col">
				<p className="text-muted-foreground text-xs">Maintenance Calories</p>
				<p className=" text-xl font-semibold">
					<AnimateCount to={calories} duration={3} ease={[0.31, 0.34, 0.34, 1]} /> kcal
				</p>
			</div>
		</motion.div>

		<div className="grid grid-cols-3 gap-4">
			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.25 }}
				className="flex flex-col justify-center bg-blue-100 dark:bg-zinc-900 p-4 rounded-lg"
			>
				<p className="text-muted-foreground text-xs text-blue-600">Carbs</p>
				<p className="text-xl font-semibold text-blue-900">
					<AnimateCount to={carbohydrates} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ delay: 0.75, duration: 0.25 }}
				className="flex flex-col justify-center bg-rose-100 dark:bg-zinc-900 p-4 rounded-lg"
			>
				<p className="text-muted-foreground text-xs text-rose-600">Fat</p>
				<p className="text-xl font-semibold text-rose-900">
					<AnimateCount to={fat} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ delay: 1, duration: 0.25 }}
				className="flex flex-col justify-center bg-orange-100 dark:bg-zinc-900 p-4 rounded-lg"
			>
				<p className="text-muted-foreground text-xs text-orange-600">Protein</p>
				<p className="text-xl font-semibold text-orange-900">
					<AnimateCount to={proteins} duration={3} ease={[0.31, 0.34, 0.34, 1]} />g
				</p>
			</motion.div>
		</div>
	</div>
);
