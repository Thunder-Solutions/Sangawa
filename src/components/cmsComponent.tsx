'use client';

import { PropsWithChildren } from 'react';
import CtaLayout from './ctaLayout';
import CtaLink from './ctaLink';
import Section from './section';
import InfoLayout from './infoLayout';
import Info from './info';
import Text from './text';
import Image from './image';
import { Content } from '@/api-client/api-client';
import { FeaturedContent } from './featuredContent';

const Components = {
	CtaLayout,
	CtaLink,
	Section,
	Text,
	InfoLayout,
	Info,
	Image,
	FeaturedContent,
	__default: ({ children }: PropsWithChildren) => children,
};

export type PageContent = {
	component?: keyof typeof Components;
	__text?: string;
} & {
	[prop: string]: string;
};

// TODO: refine the type system and remove these ts-ignores
const CMSComponent = ({ content, childContent }: Content) => {
	const { component, __text, ...__props } = content as PageContent;
	const props: { [prop: string]: string } = {};
	for (const prop in __props) {
		props[prop.replace('prop__', '')] = __props[prop];
	}

	const Component = Components[component ?? '__default'];

	return component ? (
		// @ts-ignore
		<Component {...props}>
			{childContent?.map(({ id, ...childProps }) => <CMSComponent key={id} {...childProps} />)}
		</Component>
	) : (
		__text
	);
};

export default CMSComponent;
