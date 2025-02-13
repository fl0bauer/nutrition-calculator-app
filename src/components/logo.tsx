import { FC } from 'react';
import { Dumbbell } from 'lucide-react';

export const Logo: FC = () => (
	<div className="flex items-center gap-2 self-center font-medium">
		<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
			<Dumbbell className="size-4" />
		</div>
		Nutrition Calculator
	</div>
);
