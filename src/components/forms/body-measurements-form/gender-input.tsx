import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Mars, Venus } from 'lucide-react';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';

interface GenderInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'gender'>;
}

export const GenderInput: FC<GenderInputProps> = ({ field }) => (
	<FormItem>
		<FormControl>
			<RadioGroup className="grid grid-cols-2 gap-4" onValueChange={field.onChange} defaultValue={field.value}>
				<div>
					<RadioGroupItem value="male" id="male" className="peer sr-only" aria-label="Male" />
					<Label
						htmlFor="male"
						className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
					>
						<Mars className="text-blue-500 dark:text-blue-400 mb-3 h-6 w-6" />
						Male
					</Label>
				</div>
				<div>
					<RadioGroupItem value="female" id="female" className="peer sr-only" aria-label="Female" />
					<Label
						htmlFor="female"
						className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
					>
						<Venus className="text-rose-500 dark:text-rose-400 mb-3 h-6 w-6" />
						Female
					</Label>
				</div>
			</RadioGroup>
		</FormControl>
		<FormMessage />
	</FormItem>
);
