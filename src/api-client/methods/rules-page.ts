import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchRulesPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: 'd044e1c1-f7fc-41a7-8365-241f759b0be2',
					content: {
						page: 'rules',
						title: 'Sangawa Project | Rules',
					},
				},
			],
			pageContent: [
				{
					id: '4cd47d8d-dfa0-4c4c-9c97-757786576386',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '1831d0c0-74e3-4d26-af97-fb1c6cfe4a84',
							content: {
								component: 'Text',
								prop__text: `# Frequently Asked Questions

**How much does it cost?**

General Admission is $65!

For extra perks, consider the upgrades we have available: Chūnin (+$15), Jōnin (+$45), or Kage (+$60). See details for each upgrade on our [registration page](/registration).

**What if I need a refund?**

All sales are final so please be sure before you purchase a badge. HOWEVER you can transfer your badge to someone else within 3 days of the show.

**Do I need a form of photo identification to attend the Sangawa Project?**

Yes! A form of photo identification is required to attend the Sangawa Project, because it is an age restricted event. Acceptable forms of identification include a drivers license, state ID, passport, military ID, and a college ID with a birth date. In addition for 21+ events, you will be carded at the door, so keep your ID handy.

**Do I need my confirmation email?**

While the registration staff will still be able to locate your registration, bringing a printed copy of the confirmation email will ensure a swift and problem free registration process. So please bring a copy if you can! 

**I purchased a badge but now I cannot attend, what do I do now?**

Unfortunately there is a no refund policy for all badge purchases however you can transfer your badge to someone else up to 3 days prior to the show starting.

**How old do you need to be to attend?**

The Sangawa Project is an 18+ event only! No individuals under the age 18 will be permitted to register or attend.

**What happens if I lose my badge?**

If you lose your badge, we require you to purchase another badge. However, if your badge is found, we offer a lost badge refund if both badges are brought to the registration area.

**Why are there no single day passes?**

The Sangawa Project is much too small of an event to financially afford single day passes. Since a majority of individuals do not preregister, single day passes would make predicting our budget extremely difficult. We do, however, offer a Sunday discount if we have not sold out of passes over the weekend.

**How do I pick up my badge? Is it mailed?**

Currently, we do not mail out badges. However, we will send you a confirmation email that we encourage you to print out and bring with you to the registration desk, which will be easily discernible by signs at the Downtown Doubletree. With the confirmation email, our registration staff will be able to speedily get your badge.

**Should I get a hotel room?**

Yes! We strongly encourage you to reserve a room at the DoubleTree! Between the extremely late night programming and the 21+ events reserving a hotel room will make your Sangawa experience fuller and safer!

# Attendance Rules

- **Age Restrictions**
  - Sangawa is an 18+ event with additional 21+ content.
  - A government issued is required at Registration and is also required to attend 21+ events
- **Badges**
  - Badges are required for attendance at all Pittsburgh JCS Inc. events.
  - Any attendees found with a counterfeit badge will be removed from Sangawa and blacklisted from future PittJCS shows.
- **All Badge Sales Are Final except where otherwise noted.**
  - Badge pricing will be posted at the Registration Counter and is subject to change at any time.
  - Badges must be worn in a visible and appropriate location at all times.
  - Badges may be removed while actively performing on stage or temporarily for photographs.
  - Lost badges will not be replaced. If it is lost, you will be required to purchase a new badge at the current price. However, if the original badge is later found, it may be brought back to the registration desk to receive a refund.
  - If an attendee is ejected from the event for any reason, a refund will not be issued for their badge.
  - The production, sale, or use of counterfeit badges is prohibited. This also includes alteration of a purchased badge to gain access and/or knowingly purchasing and/or utilizing a counterfeit badge.
    - **Penalties may include:**
      - Ejection from the event.
      - Blacklisting from future Pittsburgh JCS Inc. events.
      - Notification sent to other conventions regarding actions taken.
      - Prosecution to the fullest extent of the law.
- **Standard of Dress**
  - Genitalia must be reasonably covered at all times.
  - Any graphic or vivid outline of genitalia that is visible is not permitted. (i.e. if we can see the details of what's beneath your underwear, you will be asked to pad or cover it.)
  - Footwear is mandatory at all times.
    - Clear/Invisible shoes are permitted.
  - Garments with obscene or profane images and/or text are prohibited.
  - Garments offering “Free Hugs” or similar are prohibited.
  - Those who fail to comply will be asked to remedy the issue or leave the premises until they are properly attired.

- **Standard of Conduct**
  - A basic standard of decency towards those around you should be adhered to at all times.
  - No running while attending the event.
  - The use of skates, skateboards, heelies, trampoline shoes, and recreational mobility items are prohibited.
  - Engaging in violence or fighting is prohibited.
    - Anyone who does so will be ejected from the event.
  - When in line for events, please wait in a single file line.
    - You may not save a spot in line for a friend, leave the line and come back to the same spot, or “cut” in line.
  - The sale of any item(s) or service(s) is prohibited unless you are an official event Vendor or Artist and you are in the designated area.
  - Visible intoxication is prohibited and violators will be escorted to facility security unless otherwise specified.
  - Consumption of alcohol outside specific events is prohibited unless otherwise stated.
  - There is to be no smoking inside of the event venue.
    - This includes but is not limited to Cigarettes, Cigars, Pipes, and E-Cigs.
    - Chewing tobacco is also prohibited.
  - All local, state and federal laws apply inside the confines of the event.
# Harassment Policy
- **Harassment of any kind is not tolerated at any Pittsburgh Japanese Culture Society event. The safety and well-being of our attendees, guests, and staff is of the utmost importance.**
  - Harassment is defined by the victim.
  - Harassment can include but is not limited to:
    - Intentionally making another uncomfortable.
    - Physical or verbal assault.
    - This could include offensive jokes or comments that you may believe to be ultimately harmless.
    - Bullying or discrimination of any kind.
    - Intimidation, stalking, and/or unwelcome physical attention.
    - Non-consensual flirtation or sexual advances.
    - Non-consensual photography or recording.
    - Bathroom policing (The act of harassing someone for using the bathroom of the gender they identify with).
  - Reporting
    - We encourage you to make reports as soon as possible so that the situation can be dealt with immediately.
    - If you feel that you are being harassed by anyone (attendee, staff, guest, press, venue personnel, etc.), please report it immediately to a member of our security staff.
    - If you are not comfortable speaking with a member of our security staff, the Harassment Response Officer will be available at any time by calling 866-767-9708 ext. 1.
    - E-mail reporting can be sent to  hro@pittjcs.org
  - Consequences of Harassment
    - At the discretion of the Harassment Response Officer (HRO) and in no specific order:
      - Verbal warnings may be issued only once.
      - Immediate ejection from the event with no refund.
      - Placement upon a blacklist for all future PittJCS events.
      - Law enforcement authorities will be notified where appropriate.

Be advised: This page is still being developed, more information to come.`,
							},
						},
					],
				},
			],
		};
	});
};
