import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Summary, SummaryProps } from '@/components/summary';

export const SummaryCard: FC<SummaryProps> = (props) => (
	<Card className="w-full max-w-2xl overflow-hidden">
		<CardHeader>
			<CardTitle>Your Overview</CardTitle>
			<CardDescription>Calories and Nutritions based on your provided information</CardDescription>
		</CardHeader>
		<CardContent>
			<Summary {...props} />
		</CardContent>
	</Card>
);
