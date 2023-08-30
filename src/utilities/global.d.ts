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
		}
	}
}
