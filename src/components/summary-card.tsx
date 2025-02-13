import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Summary } from '@/components/summary';

export const SummaryCard: FC = () => (
	<Card className="w-full max-w-2xl overflow-hidden">
		<CardHeader>
			<CardTitle>Your Overview</CardTitle>
			<CardDescription>Calories and Nutritions based on your provided information</CardDescription>
		</CardHeader>
		<CardContent>
			<Summary calories={2700} carbohydrates={125} fat={59} proteins={177} />
		</CardContent>
	</Card>
);
