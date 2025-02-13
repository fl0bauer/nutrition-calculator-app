import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Cake } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BodyMeasurementsFormSchema } from '@/components/forms/body-measurements-form/body-measurements-form-schema';

interface AgeInputProps {
	field: ControllerRenderProps<z.infer<typeof BodyMeasurementsFormSchema>, 'age'>;
}

export const AgeInput: FC<AgeInputProps> = ({ field }) => (
	<FormItem>
		<FormLabel className="flex items-center gap-1">
			<Cake className="size-4" />
			Age
		</FormLabel>
		<FormControl>
			<Input type="number" placeholder="Age" {...field} />
		</FormControl>
		<FormMessage />
	</FormItem>
);
