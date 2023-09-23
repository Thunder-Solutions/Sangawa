'use client';

import { HTMLAttributes, MouseEventHandler, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import { createContext } from 'react';

export const NavigationContext = createContext({
	loading: false,
	setLoading: (loading: boolean) => {},
});

export const Link = ({
	onClick,
	...forwardedProps
}: PropsWithChildren<LinkProps & HTMLAttributes<HTMLAnchorElement>>) => {
	const navigationContext = useContext(NavigationContext);
	const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
		navigationContext.setLoading(true);
		if (onClick instanceof Function) {
			onClick(event);
		}
	};
	return <NextLink onClick={handleClick} {...forwardedProps} />;
};

export const NavigationProvider = ({ children }: PropsWithChildren) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		setLoading(false);
	}, [pathname, searchParams]);

	return <NavigationContext.Provider value={{ loading, setLoading }}>{children}</NavigationContext.Provider>;
};
