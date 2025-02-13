import { useEffect, HTMLAttributes, useRef, FC } from 'react';
import { animate } from 'motion/react';
import { KeyframeOptions } from 'motion';

export interface AnimateCountProps extends HTMLAttributes<HTMLSpanElement> {
	from?: number;
	to: number;
	duration?: number;
	ease?: KeyframeOptions['ease'];
}

const AnimateCount: FC<AnimateCountProps> = ({ className, from = 0, to, duration = 1, ease = 'circOut', ...props }) => {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const controls = animate(from, to, {
			duration,
			ease,
			onUpdate: (value) => (ref.current!.textContent = Intl.NumberFormat('en-US').format(+value.toFixed(0))),
		});

		return () => controls.stop();
	}, [from, to]);

	return <span ref={ref} {...props} />;
};

AnimateCount.displayName = 'AnimateCount';

export { AnimateCount };
