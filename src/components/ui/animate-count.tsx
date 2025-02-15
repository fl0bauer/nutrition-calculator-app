import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import { animate } from 'motion/react';
import { KeyframeOptions } from 'motion';

export interface AnimateCountProps extends HTMLAttributes<HTMLSpanElement> {
	from?: number;
	to: number;
	duration?: number;
	ease?: KeyframeOptions['ease'];
}

const AnimateCount: FC<AnimateCountProps> = ({ from = 0, to, duration = 1, ease = 'circOut', ...props }) => {
	const ref = useRef<HTMLSpanElement>(null);
	
	const formatValue = (value: number) => {
		return Intl.NumberFormat('en-US').format(+value.toFixed(0)).replaceAll(',', '.');
	};

	useEffect(() => {
		const controls = animate(from, to, {
			duration,
			ease,
			onUpdate: (value) => (ref.current!.textContent = formatValue(value)),
		});

		return () => controls.stop();
	}, [from, to]);

	return <span ref={ref} {...props} />;
};

AnimateCount.displayName = 'AnimateCount';

export { AnimateCount };
