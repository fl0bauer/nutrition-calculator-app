import { FC } from 'react';
import { ArrowBigLeftDash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NutritionCard } from '@/components/nutrition-card';

export interface SummaryProps {
	calories?: number;
	carbohydrates?: number;
	fat?: number;
	protein?: number;
	onGoBack: () => void;
}

export const Summary: FC<SummaryProps> = ({ calories = 0, carbohydrates = 0, fat = 0, protein = 0, onGoBack }) => (
	<div className="flex flex-col gap-4">
		<NutritionCard color="zinc" name="Maintenance Calories" count={calories} unit="kcal" animationDelay={0.25} />

		<div className="grid sm:grid-cols-3 gap-4">
			<NutritionCard color="blue" name="Carbs" count={carbohydrates} unit="g" animationDelay={0.75} />
			<NutritionCard color="rose" name="Fat" count={fat} unit="g" animationDelay={1} />
			<NutritionCard color="orange" name="Protein" count={protein} unit="g" animationDelay={1.25} />
		</div>

		<Button className="mt-4 w-fit" variant="secondary" onClick={onGoBack}>
			<ArrowBigLeftDash className="mr-1 h-6 w-6" />
			Go To Calculator
		</Button>
	</div>
);
