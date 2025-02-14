import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface WeightInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'weight'>;
}

export const WeightInput: FC<WeightInputProps> = ({ field }) => (
	<FormItem>
		<FormControl>
			<Input type="number" inputMode="numeric" placeholder="Weight (kg)" {...field} />
		</FormControl>
		<FormMessage />
	</FormItem>
);
