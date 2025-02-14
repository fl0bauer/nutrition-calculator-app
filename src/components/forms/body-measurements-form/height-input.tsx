import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface HeightInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'height'>;
}

export const HeightInput: FC<HeightInputProps> = ({ field }) => (
	<FormItem>
		<FormControl>
			<Input type="number" inputMode="numeric" placeholder="Height (cm)" {...field} />
		</FormControl>
		<FormMessage />
	</FormItem>
);
