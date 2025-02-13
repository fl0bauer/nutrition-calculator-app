'use client';

import { AnimatePresence, AnimationProps, motion } from 'motion/react';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import Confetti from 'react-confetti-boom';
import { CalculatorCard } from '@/components/calculator-card';
import { SummaryCard } from '@/components/summary-card';
import { ActivityFactor, calculateMacroNutritions, calculateMaintenanceCalories, Gender } from 'nutrition-calculator';
import { SummaryProps } from '@/components/summary';
import { toast } from 'sonner';
import { BodyMeasurementsFormProps } from '@/components/forms/body-measurements-form/body-measurements-form';

type Screen = 'calculator' | 'result';

export default function Home() {
	const [activeScreen, setActiveScreen] = useState<Screen>('calculator');
	const [summary, setSummary] = useState<SummaryProps>();

	const animations: Record<Screen, AnimationProps> = {
		calculator: {
			initial: { x: 0, scale: 0.9, opacity: 0, filter: 'blur(4px)' },
			animate: { x: 0, scale: 1, opacity: 1, filter: 'blur(0)' },
			exit: { x: -100, opacity: 0, filter: 'blur(4px)' },
		},
		result: {
			initial: { x: 100, opacity: 0, filter: 'blur(4px)' },
			animate: { x: 0, opacity: 1, filter: 'blur(0)' },
			exit: { x: 100, opacity: 0, filter: 'blur(4px)' },
		},
	};

	const onSubmit: BodyMeasurementsFormProps['onSubmit'] = ({ gender, weight, height, age, activityFactor }) => {
		try {
			const calories = calculateMaintenanceCalories(
				gender as Gender,
				{ weight, height, age },
				activityFactor as ActivityFactor,
			);
			const { carbohydrates, fat, protein } = calculateMacroNutritions(calories, {
				carbohydrates: 50,
				fat: 20,
				protein: 30,
			});

			setSummary({ calories, carbohydrates, fat, protein });
			setActiveScreen('result');
		} catch (error) {
			console.error(error);
			toast.error('Calculation failed', { description: 'This is probably caused by an internal problem' });
		}
	};

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<motion.div
				initial={{ scale: 0.75, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ delay: 0.25 }}
			>
				<Logo />
			</motion.div>

			{activeScreen === 'result' && (
				<div className="z-10">
					<Confetti
						mode="boom"
						particleCount={250}
						shapeSize={12}
						deg={270}
						spreadDeg={90}
						x={0.5}
						y={0.67}
						launchSpeed={2}
						colors={['#ff577f', '#ff884b', '#ffd384', '#b0deff']}
					/>
				</div>
			)}

			<AnimatePresence mode="wait">
				<motion.div key={activeScreen} {...animations[activeScreen]}>
					{activeScreen === 'calculator' && <CalculatorCard onSubmit={onSubmit} />}
					{activeScreen === 'result' && <SummaryCard {...summary} />}
				</motion.div>
			</AnimatePresence>

			<motion.p
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5 }}
				className="select-none text-balance text-center text-xs text-muted-foreground opacity-75"
			>
				Any data you enter is not stored or shared with third parties.
			</motion.p>
		</div>
	);
}
