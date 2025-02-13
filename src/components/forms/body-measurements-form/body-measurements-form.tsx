import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField } from '@/components/ui/form';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { GenderInput } from '@/components/forms/body-measurements-form/gender-input';
import { WeightInput } from '@/components/forms/body-measurements-form/weight-input';
import { HeightInput } from '@/components/forms/body-measurements-form/height-input';
import { AgeInput } from '@/components/forms/body-measurements-form/age-input';
import { ActivityFactorInput } from '@/components/forms/body-measurements-form/activity-factor-input';
import { ArrowBigRightDash } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface BodyMeasurementsFormProps {
	onSubmit: (data: z.infer<typeof BodyMeasurementsFormSchema>) => void;
}

export const BodyMeasurementsForm: FC<BodyMeasurementsFormProps> = ({ onSubmit }) => {
	const bodyMeasurementsForm = useForm<z.infer<typeof BodyMeasurementsFormSchema>>({
		resolver: zodResolver(BodyMeasurementsFormSchema),
		defaultValues: {
			gender: 'male',
			weight: 80.5,
			height: 189,
			age: 25,
			activityFactor: 'lightActivity',
		},
	});

	return (
		<Form {...bodyMeasurementsForm}>
			<form className="flex flex-col gap-4" onSubmit={bodyMeasurementsForm.handleSubmit(onSubmit)}>
				<FormField
					control={bodyMeasurementsForm.control}
					name="gender"
					render={({ field }) => <GenderInput field={field} />}
				/>

				<div className="grid md:grid-cols-3 gap-4">
					<FormField
						control={bodyMeasurementsForm.control}
						name="weight"
						render={({ field }) => <WeightInput field={field} />}
					/>

					<FormField
						control={bodyMeasurementsForm.control}
						name="height"
						render={({ field }) => <HeightInput field={field} />}
					/>

					<FormField
						control={bodyMeasurementsForm.control}
						name="age"
						render={({ field }) => <AgeInput field={field} />}
					/>
				</div>

				<FormField
					control={bodyMeasurementsForm.control}
					name="activityFactor"
					render={({ field }) => <ActivityFactorInput field={field} />}
				/>

				<Button className="mt-4" type="submit">
					<ArrowBigRightDash className="mr-1 h-6 w-6" />
					Calculate now
				</Button>
			</form>
		</Form>
	);
};
