import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Summary, SummaryProps } from '@/components/summary';

export const SummaryCard: FC<SummaryProps> = (props) => (
	<Card className="w-full max-w-2xl overflow-hidden">
		<CardHeader>
			<CardTitle>Your Nutrition Breakdown</CardTitle>
			<CardDescription>
				Results are estimates and should be used as a starting point, not as a fixed rule.
			</CardDescription>
		</CardHeader>
		<CardContent>
			<Summary {...props} />
		</CardContent>
	</Card>
);
