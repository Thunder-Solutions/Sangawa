import { IMAGE_TAG } from '@/components/image';
import { INFO_TAG } from '@/components/info';
import { INFO_LAYOUT_TAG } from '@/components/infoLayout';
import { TEXT_P_TAG, TEXT_TAG } from '@/components/text';
import { ContentSet } from '@/api-client/api-client';
import { CTA_LAYOUT_TAG } from '@/components/ctaLayout';
import { CTA_LINK_TAG } from '@/components/ctaLink';
import { CTA_SECTION_TAG } from '@/components/ctaSection';
import {
	FOOTER_TAG,
	FOOTER_LOGO_TAG,
	FOOTER_SOCIAL_TAG,
	FOOTER_SITEMAP_TAG,
	FOOTER_COPYRIGHT_TAG,
} from '@/components/footer';
import { MENU_BAR_TAG, PAGE_NAV_TAG } from '@/components/menuBar';
import { PAGE_TAG } from '@/components/page';
import { SECTION_TAG } from '@/components/section';
import { SPLASH_TAG, SCROLL_TAG } from '@/components/splash';
import { CustomIntrinsicElement } from 'react-shadow-scope';

declare global {
	var _global: any;
	namespace ReactShadowScope {
		interface CustomElements {
			[SPLASH_TAG]: CustomIntrinsicElement;
			[SCROLL_TAG]: CustomIntrinsicElement;
			[SECTION_TAG]: CustomIntrinsicElement;
			[PAGE_NAV_TAG]: CustomIntrinsicElement;
			[PAGE_TAG]: CustomIntrinsicElement;
			[MENU_BAR_TAG]: CustomIntrinsicElement;
			[FOOTER_TAG]: CustomIntrinsicElement;
			[FOOTER_LOGO_TAG]: CustomIntrinsicElement;
			[FOOTER_SOCIAL_TAG]: CustomIntrinsicElement;
			[FOOTER_SITEMAP_TAG]: CustomIntrinsicElement;
			[FOOTER_COPYRIGHT_TAG]: CustomIntrinsicElement;
			[CTA_SECTION_TAG]: CustomIntrinsicElement;
			[CTA_LINK_TAG]: CustomIntrinsicElement;
			[CTA_LAYOUT_TAG]: CustomIntrinsicElement;
			[TEXT_TAG]: CustomIntrinsicElement;
			[TEXT_P_TAG]: CustomIntrinsicElement;
			[INFO_LAYOUT_TAG]: CustomIntrinsicElement;
			[INFO_TAG]: CustomIntrinsicElement;
			[IMAGE_TAG]: CustomIntrinsicElement;
		}
	}
}
