import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface AgeInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'age'>;
}

export const AgeInput: FC<AgeInputProps> = ({ field }) => (
	<FormItem>
		<FormControl>
			<Input type="number" inputMode="numeric" placeholder="Age" {...field} />
		</FormControl>
		<FormMessage />
	</FormItem>
);
