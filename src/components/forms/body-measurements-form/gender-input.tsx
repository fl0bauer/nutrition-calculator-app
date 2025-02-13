import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Mars, Venus } from 'lucide-react';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface GenderInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'gender'>;
}

export const GenderInput: FC<GenderInputProps> = ({ field }) => (
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
