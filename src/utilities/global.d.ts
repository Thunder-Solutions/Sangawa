import { CTA_LAYOUT_TAG } from '@/components/ctaLayout';
import { CTA_LINK_TAG } from '@/components/ctaLink';
import { CTA_SECTION_TAG } from '@/components/ctaSection';
import { FOOTER_TAG } from '@/components/footer';
import { MENU_BAR_TAG, MENU_TOGGLER_TAG } from '@/components/menuBar';
import { PAGE_TAG } from '@/components/page';
import { PAGE_NAV_TAG } from '@/components/pageNav';
import { SECTION_TAG } from '@/components/section';
import { SPLASH_TAG } from '@/components/splash';
import { CustomIntrinsicElement } from 'react-shadow-scope';

declare global {
	namespace ReactShadowScope {
		interface CustomElements {
			[SPLASH_TAG]: CustomIntrinsicElement;
			[SECTION_TAG]: CustomIntrinsicElement;
			[PAGE_NAV_TAG]: CustomIntrinsicElement;
			[PAGE_TAG]: CustomIntrinsicElement;
			[MENU_TOGGLER_TAG]: CustomIntrinsicElement;
			[MENU_BAR_TAG]: CustomIntrinsicElement;
			[FOOTER_TAG]: CustomIntrinsicElement;
			[CTA_SECTION_TAG]: CustomIntrinsicElement;
			[CTA_LINK_TAG]: CustomIntrinsicElement;
			[CTA_LAYOUT_TAG]: CustomIntrinsicElement;
		}
	}
}
