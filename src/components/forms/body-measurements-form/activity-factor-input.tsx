import { FC, useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Bike } from 'lucide-react';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ActivityFactor } from 'nutrition-calculator';

interface ActivityFactorOption {
	activityFactor: ActivityFactor;
	name: string;
	description: string;
}

const ActivityFactorOptions: ActivityFactorOption[] = [
	{
		activityFactor: ActivityFactor.Sedentary,
		name: 'Sedentary',
		description: 'little to no exercise',
	},
	{
		activityFactor: ActivityFactor.LightActivity,
		name: 'Light Activity',
		description: 'light exercise/sports 1-3 days/week',
	},
	{
		activityFactor: ActivityFactor.ModeratelyActive,
		name: 'Moderately',
		description: 'moderate exercise/sports 3-5 days/week',
	},
	{
		activityFactor: ActivityFactor.VeryActive,
		name: 'Very Active',
		description: 'hard exercise/sports 6-7 days/week',
	},
	{
		activityFactor: ActivityFactor.ExtraActive,
		name: 'Extra Active',
		description: 'very hard daily exercise/sports & physical job',
	},
];

interface ActivityFactorProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'activityFactor'>;
}

export const ActivityFactorInput: FC<ActivityFactorProps> = ({ field }) => {
	const [selectedOption, setSelectedOption] = useState<ActivityFactorOption>();

	useEffect(() => {
		setSelectedOption(ActivityFactorOptions.find(({ activityFactor }) => field.value === activityFactor));
	}, [field, field.value]);

	return (
		<FormItem>
			<FormLabel className="flex items-center gap-1">
				<Bike className="size-4" />
				Activity Factor
			</FormLabel>
			<FormControl>
				<Select onValueChange={field.onChange} defaultValue={field.value}>
					<SelectTrigger>
						<SelectValue placeholder="Activity Factor">
							<div className="flex gap-1">
								<span>{selectedOption?.name}</span>
								<span className="text-muted-foreground">({selectedOption?.description})</span>
							</div>
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{ActivityFactorOptions.map(({ activityFactor, name, description }) => (
							<SelectItem key={activityFactor} value={activityFactor}>
								<div className="flex flex-col">
									<span>{name}</span>
									<span className="text-muted-foreground">{description}</span>
								</div>
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</FormControl>
		</FormItem>
	);
};
