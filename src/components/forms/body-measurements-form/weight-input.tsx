import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Scale } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface WeightInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'weight'>;
}

export const WeightInput: FC<WeightInputProps> = ({ field }) => (
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
