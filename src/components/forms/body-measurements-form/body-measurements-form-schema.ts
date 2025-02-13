import { z } from 'zod';

export const BodyMeasurementsFormSchema = z.object({
	gender: z.enum(['male', 'female']),
	weight: z.coerce
		.number()
		.min(30, { message: 'Weight must be at least 30 Kilograms.' })
		.max(280, { message: 'Weight must be smaller than 280 Kilograms.' }),
	height: z.coerce
		.number()
		.min(100, { message: 'Height must be at least 100 centimeters.' })
		.max(250, { message: 'Height must be smaller than 250 centimeters.' }),
	age: z.coerce
		.number()
		.int({ message: 'Age must be a normal number' })
		.min(14, { message: 'Age must be at least 14 years.' })
		.max(100, { message: 'Age must be smaller than 100 years.' }),
	activityFactor: z.enum(['sedentary', 'lightActivity', 'moderatelyActive', 'veryActive', 'extraActive']),
});
