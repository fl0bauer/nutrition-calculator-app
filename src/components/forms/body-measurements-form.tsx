import { FC } from 'react';
import { z } from 'zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowBigRightDash, Bike, Cake, Mars, Ruler, Scale, Venus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const BodyMeasurementsFormSchema = z.object({
	gender: z.enum(['male', 'female']),
	weight: z
		.number()
		.min(30, { message: 'Weight must be at least 30 Kilograms.' })
		.max(280, { message: 'Weight must be smaller than 280 Kilograms.' }),
	height: z
		.number()
		.min(100, { message: 'Height must be at least 100 centimeters.' })
		.max(250, { message: 'Height must be smaller than 250 centimeters.' }),
	age: z
		.number()
		.min(14, { message: 'Age must be at least 14 years.' })
		.max(100, { message: 'Age must be smaller than 100 years.' }),
	activityLevel: z.enum(['sedentary', 'lightActivity', 'moderatelyActive', 'veryActive', 'extraActive']),
});

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
			activityLevel: 'lightActivity',
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
					name="activityLevel"
					render={({ field }) => <ActivityLevelInput field={field} />}
				/>

				<Button className="mt-4" type="submit">
					<ArrowBigRightDash className="mr-1 h-6 w-6" />
					Calculate now
				</Button>
			</form>
		</Form>
	);
};

const GenderInput: FC<{
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'gender'>;
}> = ({ field }) => (
	<RadioGroup className="grid grid-cols-2 gap-4" onValueChange={field.onChange} defaultValue={field.value}>
		<div>
			<RadioGroupItem value="male" id="male" className="peer sr-only" aria-label="Male" />
			<Label
				htmlFor="male"
				className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
			>
				<Mars className="mb-3 h-6 w-6" />
				Male
			</Label>
		</div>
		<div>
			<RadioGroupItem value="female" id="female" className="peer sr-only" aria-label="Female" />
			<Label
				htmlFor="female"
				className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
			>
				<Venus className="mb-3 h-6 w-6" />
				Female
			</Label>
		</div>
	</RadioGroup>
);

const WeightInput: FC<{
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'weight'>;
}> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Scale className="size-4" />
			Weight (kg)
		</FormLabel>
		<FormControl>
			<Input
				type="number"
				placeholder="Weight (kg)"
				{...field}
				onChange={(event) => field.onChange(+event.target.value)}
			/>
		</FormControl>
		<FormMessage />
	</FormItem>
);

const HeightInput: FC<{
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'height'>;
}> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Ruler className="size-4" />
			Height (cm)
		</FormLabel>
		<FormControl>
			<Input
				type="number"
				placeholder="Height (cm)"
				{...field}
				onChange={(event) => field.onChange(+event.target.value)}
			/>
		</FormControl>
		<FormMessage />
	</FormItem>
);

const AgeInput: FC<{
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'age'>;
}> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Cake className="size-4" />
			Age
		</FormLabel>
		<FormControl>
			<Input
				type="number"
				placeholder="Age"
				{...field}
				onChange={(event) => field.onChange(+event.target.value)}
			/>
		</FormControl>
		<FormMessage />
	</FormItem>
);

const ActivityLevelInput: FC<{
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'activityLevel'>;
}> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Bike className="size-4" />
			Activity Level
		</FormLabel>
		<FormControl>
			<Select onValueChange={field.onChange} defaultValue={field.value}>
				<SelectTrigger>
					<SelectValue placeholder="Activity Level" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="sedentary">
						<div className="flex gap-1">
							<span>Sedentary</span>
							<span className="text-muted-foreground">little to no exercise</span>
						</div>
					</SelectItem>

					<SelectItem value="lightActivity">
						<div className="flex gap-1">
							<span>Light Activity</span>
							<span className="text-muted-foreground">light exercise/sports 1-3 days/week</span>
						</div>
					</SelectItem>

					<SelectItem value="moderatelyActive">
						<div className="flex gap-1">
							<span>Moderately Active</span>
							<span className="text-muted-foreground">moderate exercise/sports 3-5 days/week</span>
						</div>
					</SelectItem>

					<SelectItem value="veryActive">
						<div className="flex gap-1">
							<span>Very Active</span>
							<span className="text-muted-foreground">hard exercise/sports 6-7 days/week</span>
						</div>
					</SelectItem>

					<SelectItem value="extraActive">
						<div className="flex gap-1">
							<span>Extra Active</span>
							<span className="text-muted-foreground">
								very hard daily exercise/sports & physical job or 2X day training
							</span>
						</div>
					</SelectItem>
				</SelectContent>
			</Select>
		</FormControl>
	</FormItem>
);
