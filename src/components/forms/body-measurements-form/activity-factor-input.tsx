import { FC, useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalculateMaintenanceCalories } from 'nutrition-calculator';

interface ActivityFactorOption {
	activity: CalculateMaintenanceCalories['activity'];
	name: string;
	description: string;
}

const ActivityFactorOptions: ActivityFactorOption[] = [
	{
		activity: 'sedentary',
		name: 'Sedentary',
		description: 'little to no exercise',
	},
	{
		activity: 'lightActivity',
		name: 'Light Activity',
		description: 'light exercise/sports 1-3 days/week',
	},
	{
		activity: 'moderatelyActive',
		name: 'Moderately',
		description: 'moderate exercise/sports 3-5 days/week',
	},
	{
		activity: 'veryActive',
		name: 'Very Active',
		description: 'hard exercise/sports 6-7 days/week',
	},
	{
		activity: 'extraActive',
		name: 'Extra Active',
		description: 'very hard daily exercise/sports & physical job',
	},
];

interface ActivityFactorProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'activity'>;
}

export const ActivityFactorInput: FC<ActivityFactorProps> = ({ field }) => {
	const [selectedOption, setSelectedOption] = useState<ActivityFactorOption>();

	useEffect(() => {
		setSelectedOption(ActivityFactorOptions.find(({ activity }) => field.value === activity));
	}, [field, field.value]);

	return (
		<FormItem>
			<FormControl>
				<Select onValueChange={field.onChange} defaultValue={field.value}>
					<SelectTrigger>
						<SelectValue placeholder="Your Daily Activity Level">
							<div className="flex gap-1">
								<span>{selectedOption?.name}</span>
								<span className="text-muted-foreground">({selectedOption?.description})</span>
							</div>
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{ActivityFactorOptions.map(({ activity, name, description }) => (
							<SelectItem key={activity} value={activity}>
								<div className="flex flex-col">
									<span>{name}</span>
									<span className="text-muted-foreground">{description}</span>
								</div>
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</FormControl>
			<FormMessage />
		</FormItem>
	);
};
