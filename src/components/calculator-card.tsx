import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	BodyMeasurementsForm,
	BodyMeasurementsFormProps,
} from '@/components/forms/body-measurements-form/body-measurements-form';

export const CalculatorCard: FC<BodyMeasurementsFormProps> = (props) => (
	<Card className="w-full max-w-2xl overflow-hidden">
		<CardHeader>
			<CardTitle>Get Started with Your Info</CardTitle>
			<CardDescription>Fill in your measurements to get accurate nutrition insights.</CardDescription>
		</CardHeader>
		<CardContent>
			<BodyMeasurementsForm {...props} />
		</CardContent>
	</Card>
);
