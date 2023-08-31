'use client';

import { Fragment } from 'react';
import CtaLayout from './ctaLayout';
import CtaLink from './ctaLink';
import Section from './section';
import { Content } from '@/api-client/api-client';

const Components = {
	CtaLayout,
	CtaLink,
	Section,
	__text: ({ __text }: { __text: string }) => __text,
};

const EmptyComponent = () => <></>;

export type PageContent = {
	component: keyof typeof Components;
} & {
	[prop: string]: string;
};

// TODO: refine the type system and remove these ts-ignores
const CMSComponent = ({ content, childContent }: Content) => {
	const { component, ...__props } = content;
	const props: { [prop: string]: string } = {};
	for (const prop in __props) {
		props[prop.replace('prop__', '')] = __props[prop];
	}

	// @ts-ignore
	const Component = Components[component] ?? EmptyComponent;
	console.log(component, Component);

	return (
		<Component {...props}>
			{childContent?.map(({ id, ...childProps }) => <CMSComponent key={id} {...childProps} />)}
		</Component>
	);
};

export default CMSComponent;
