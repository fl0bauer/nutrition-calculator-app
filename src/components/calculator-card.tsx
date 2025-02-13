import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BodyMeasurementsForm, BodyMeasurementsFormProps } from '@/components/forms/body-measurements-form';

export const CalculatorCard: FC<BodyMeasurementsFormProps> = (props) => (
	<Card className="w-full max-w-2xl overflow-hidden">
		<CardHeader>
			<CardTitle>Enter your Details</CardTitle>
			<CardDescription>Please provide accurate information for the most precise calculations</CardDescription>
		</CardHeader>
		<CardContent>
			<BodyMeasurementsForm {...props} />
		</CardContent>
	</Card>
);
