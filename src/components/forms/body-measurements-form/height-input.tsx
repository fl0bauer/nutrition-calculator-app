import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Ruler } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface HeightInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'height'>;
}

export const HeightInput: FC<HeightInputProps> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Ruler className="size-4" />
			Height (cm)
		</FormLabel>
		<FormControl>
			<Input type="number" placeholder="Height (cm)" {...field} />
		</FormControl>
		<FormMessage />
	</FormItem>
);
