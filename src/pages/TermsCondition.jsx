import { HashLink } from "react-router-hash-link";

const MyTable = () => {
  return (
    <table className="border-collapse border  table-auto w-full ">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Promotion</p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>WINLADS Giveaway </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Promoter</p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Winlads Pty Ltd ABN 87 671 535 149</p>
            <p>2009/15 Everage Street, Moonee Ponds, Victoria 3039, AU</p>
            <p>0420363993</p>
            <p>shehan.thenabadu@gmail.com</p>
            <p>
              <HashLink
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e595e]"
              >
                winladsgiveaway.com
              </HashLink>
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left ">
            <p>Promotion period</p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Start Date: 9:00am AEDT 1 January 2024 </p>
            <p>End Date: 5:00pm AEDT 28 February 2024 </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Prize</p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Mazda BT50 Ute or $60,000 Cash </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Total Prize Pool</p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>$128,750 </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Permits </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>NSW Authority Number: [xxx] </p>
            <p>ACT Permit Number: [xxx] </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Relevant States </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>All Australian states and territories except South Australia</p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Entrants </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              Entry is open to residents of the Relevant States aged eighteen
              (18) years or over{" "}
              <span className="font-semibold">(Entrants)</span>. Employees (as
              well as their immediate family members) of the Promoter,
              retailers, suppliers and associated companies and agencies are not
              eligible to enter in the Promotion.
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Entry Procedure </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              Visit the promotions page at{" "}
              <span>
                <HashLink
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e595e]"
                >
                  winladsgiveaway.com
                </HashLink>
              </span>{" "}
              (Site), sign up to one of our membership options, complete the
              entry form, agree to the Terms & Conditions and click submit.
              Entrants must enter the Promotion in their own name and will be
              required to provide all mandatory information, including the
              Entrant’s full name, residential address, age, date of birth,
              email address and contact telephone number.
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Maximum Number of Entries </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>Limit of one entry per person</p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Draw Details </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              <span className="font-semibold">Draw Date:</span> 29 February 2024{" "}
            </p>
            <p>
              <span className="font-semibold">Draw Time:</span> 9:00 am AEDT{" "}
            </p>
            <p>
              <span className="font-semibold">Draw Location:</span> 2009/15
              Everage Street, Moonee Ponds, Victoria 3039, AU{" "}
            </p>
            <p>
              <span className="font-semibold">Draw Method:</span> Electronic
              random draw{" "}
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Notification of Winners </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              Winners will be notified via email & phone no later than 29
              February 2024{" "}
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Redemption Date </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>29 May 2024 </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Unclaimed Prize Redraw </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              <span className="font-semibold">Redraw Date:</span> 1 august 2024{" "}
            </p>
            <p>
              <span className="font-semibold">Redraw Time:</span> 12pm Melbourne
              time zone{" "}
            </p>
            <p>
              <span className="font-semibold">Redraw Location:</span> 15 everage
              street Moonee Ponds{" "}
            </p>
            <p>
              <span className="font-semibold">Redraw Method:</span> electronic{" "}
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Notification of Unclaimed Prize Redraw Winners </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              Unclaimed prize winners will be notified via email & phone no
              later than [insert date].{" "}
            </p>
          </td>
        </tr>

        <tr>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p> Privacy Policy </p>
          </td>
          <td className="text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl 2xl:text-2xl  special:text-4xl  border border-black sm:p-4 p-3  lg:text-left 4xl:text:left xl:text-left">
            <p>
              <HashLink
                to="/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e595e]"
              >
                winladsgiveaway.com/privacypolicy
              </HashLink>{" "}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

function TermsCondition() {
  return (
    <div
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div className="">
        <div className="">
          <p className="text-3xl 4xl:text-8xl xl:text-6xl special:text-8xl md:text-4xl font-bold uppercase tracking-widest sm:p-4 p-3 text-center lg:text-4xl lg:text-center 4xl:text:center xl:text-center">
            TERMS & CONDITIONS
          </p>
        </div>
        <div className="">
          <p className="text-xl 4xl:text-6xl xl:text-4xl special:text-8xl md:text-4xl font-bold	 mx-20  sm:p-4 p-3 text-center lg:text-4xl lg:text-left 4xl:text:left xl:text-left">
            Schedule to Terms & Conditions of Entry
          </p>
        </div>
        <div className="lg:mx-20 sm:mx-5 mx-3">
          <MyTable />
        </div>

        <p className="text-2xl 4xl:text-6xl xl:text-4xl special:text-8xl md:text-4xl font-bold	mx-20   sm:p-4 p-3 text-center lg:text-4xl lg:text-left 4xl:text:left xl:text-left mt-5">
          Terms & Conditions of Entry
        </p>
        <div className="lg:mx-20 sm:mx-5 mx-3 ">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            1. The Schedule and these Terms and Conditions govern the Entrant’s
            participation in the Promotion. Participation in the Promotion is
            deemed acceptance of these Terms & Conditions.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            2. To enter the Promotion, Entrants must complete the Entry
            Procedure during the Promotional Period.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            3. Entrants may enter the Promotion up to the Maximum Number of
            Entries.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            4. The use of automated entry software or other mechanical,
            electronic or other means that allow an Entrant to automatically
            enter the Promotion repeatedly is prohibited and will render all
            entries submitted by the Entrant invalid.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            5. Incomplete and ineligible entries will be deemed invalid. Entries
            will also be deemed invalid if they breach these Terms & Conditions
            or any other content guidelines notified by the Promoter.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            6. The Promoter reserves the right, at any time, to verify the
            validity of entries and Entrants (including an Entrant’s identity,
            age and place of residence) and to disqualify any Entrant.
          </p>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  special:text-5xl  sm:p-4 p-3  sm:text-left text-center xl:mt-5 sm:mt-4 mt-3 ">
            Prize Draw
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            7. The draw to determine the winner{" "}
            <span className="font-semibold">(Winner)</span> for the Promotion
            will be conducted in accordance with the Draw Details. Where more
            than one Prize is available, each Winner may only win one Prize.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            8. Where the Prize (as described in the Schedule) consists of
            multiple items or Prizes which are each separately redeemable by a
            Winner, the first such item or Prize will be drawn on the Draw Date
            and each subsequent item or Prize will be drawn on the Subsequent
            Draw Dates in accordance with the Draw Details.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            9. The Winner will be notified as specified in the Schedule.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            10. The Winner’s full name and city of origin will be published in a
            national newspaper, and/or on the Site, or on the Promoter’s social
            media accounts, including but not limited to, Facebook, Twitter and
            Instagram, within 30 days of the Draw Date. It is a condition of
            entry into the Promotion that the Winner consents to the publication
            of such information and participates in any media releases which may
            include photographs of the Winner by the Promoter. By entering into
            this Promotion, Entrants consent to the use of their names and
            likenesses in this manner.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            11. Entrants are responsible for all expenses incurred when entering
            the Promotion and accessing, claiming and/or using the Prize (unless
            otherwise stated on the Site).
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            12. As the Promotion is a game of chance, and subject otherwise to
            these Terms & Conditions, skill plays no part in determining the
            Winner and each valid entry will NOT be individually judged. Each
            entry has an equal chance of winning. The Winner will be confirmed
            by the Promoter.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            13. The Promoter’s decision is final and no correspondence will be
            entered into with Entrants regarding the decision.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            14. If a Winner’s entry is deemed or found to be invalid, the
            Promoter may redraw or decide on another winning entry.
          </p>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  special:text-5xl  sm:p-4 p-3  sm:text-left text-center xl:mt-5 sm:mt-4 mt-3 ">
            Prizes
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            15. The Prize(s) are specified in the Schedule.
            <span className="font-semibold">
              {" "}
              Subject to clause 5, THE PRIZE IS NOT TRANSFERRABLE AND NOT
              REDEEMABLE FOR CASH.
            </span>
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            16. If any Prize is unavailable and the Promoter has used all
            reasonable efforts to arrange the Prize, the Promoter reserves the
            right to substitute the Prize with a prize of equal value and/or
            specification, subject to any written directions from a regulatory
            authority.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            17. The Promoter and/or any supplier of the Prize or any part of the
            Prize may in their absolute discretion: <br />{" "}
            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
              (a) reserve the right to refuse to allow the Winner or their
              companion(s) (if any) to take part in any or all aspects of the
              Prize if they reasonably believe the Winner or their companion(s)
              (if any) represent a safety risk or for any other reason; and
            </div>{" "}
            
            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
              (b) may cancel the relevant component of the Prize if the
              conditions are deemed dangerous.
            </div>
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            18. <span className="font-semibold">(Motor vehicle)</span> Where a
            motor vehicle is awarded as a Prize, the Winner must be capable of
            obtaining the necessary motor vehicle registration for the Prize in
            its name, in accordance with the applicable State or Territory
            legislation in which the Prize is collected. If the Winner is unable
            to register the Prize in their own name, then the Winner may assign
            the Prize to another person (who consents to such assignment) with
            legal capacity for the purpose of registration. The Promoter takes
            no responsibility for any such arrangement between the Winner and
            the assignee.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            19. <span className="font-semibold">(Cash)</span> Where cash is
            awarded as a Prize, the Prize will be awarded in the form of a bank
            cheque, via PayPal transfer (fees may apply and are the
            responsibility of the Winner) or electronic funds transfer to the
            Winner’s nominated bank account, at the Promoter’s election.
          </p>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  special:text-5xl  sm:p-4 p-3  sm:text-left text-center xl:mt-5 sm:mt-4 mt-3 ">
            Claiming Prizes
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            20. The Prize(s) must be claimed by the Redemption Date in
            accordance with any claim instructions set out in the Schedule, or
            it will be deemed forfeited by the Entrant. The Promoter may require
            the Winner(s) to provide relevant evidence in order to claim the
            Prize, such as proof of identity, age, and any relevant proof of
            purchase.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            21. If any Prize remains unclaimed, a second draw or selection for
            the Prize will take place in accordance with the Schedule,
            specifically the Unclaimed Prize Redraw, subject to any directions
            from a regulatory authority. The alternative Winner, if any, will be
            notified in accordance with the Schedule, specifically Notification
            of Unclaimed Prize Redraw Winners.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            22. The Promoter will deliver the Prize in accordance with the
            Schedule. Should circumstances outside the Promoter’s control occur,
            which cause a delay in delivery of the Prize, the Promoter will not
            be liable.
          </p>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  special:text-5xl  sm:p-4 p-3  sm:text-left text-center xl:mt-5 sm:mt-4 mt-3 ">
            General
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            23. <span className="font-semibold">Personal information:</span> The
            Promoter collects personal information from all Entrants in order to
            conduct the Promotion and may, for this purpose, collect, use and
            disclose such information to third parties, including but not
            limited to agents, contractors, service providers, Prize suppliers
            and as required, to regulatory authorities. Please see the
            Promoter’s Privacy Policy (linked in the Schedule) and any privacy
            collection notice provided, for more information about how the
            Promoter handles your personal information. By providing personal
            information to the Promoter, the Entrant agrees to the collection,
            use, storage and disclosure of that information as described in this
            clause 28 and the Promoter’s Privacy Policy.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            24.{" "}
            <span className="font-semibold">Non-Excludable Guarantees:</span>{" "}
            Nothing in these Terms and Conditions limits, excludes or modifies
            or purports to limit, exclude or modify any legislation which cannot
            lawfully be excluded or limited, including the statutory consumer
            guarantees as provided under the Competition and Consumer Act 2010
            (Cth) or any other applicable State or Territory legislation{" "}
            <span className="font-semibold">(Non-Excludable Guarantees).</span>
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            25. <span className="font-semibold">Consequential Loss:</span>{" "}
            Despite anything to the contrary, but subject to the Non-Excludable
            Guarantees, neither party will be liable under these Terms &
            Conditions for any consequential, special or indirect loss including
            but not limited to loss of profit (including anticipated profit),
            loss of benefit (including anticipated benefit), loss of revenue,
            loss of business, loss of goodwill, loss of opportunity, loss of
            savings (including anticipated savings), loss of reputation, loss of
            use (including both real and anticipatory) and/ or loss or
            corruption of data, whether under statute, contract, equity, tort
            (including negligence), indemnity or otherwise.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            26. <span className="font-semibold">Liability:</span> A party’s
            liability for any liability in relation to these Terms and
            Conditions will be reduced proportionately to the extent the
            relevant liability was caused or contributed to by the acts or
            omissions of the other party, including any failure by that other
            party to take reasonable steps to mitigate its loss.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            27. <span className="font-semibold">Force Majeure:</span> Neither
            party will be liable for any delay or failure to perform their
            respective obligations under these Terms and Conditions if such
            delay or failure is caused or contributed to by a Force Majeure
            Event. <span className="font-semibold">Force Majeure Event</span>{" "}
            means any event or circumstance which is beyond a Party’s reasonable
            control including but not limited to, acts of God including fire,
            hurricane, typhoon, earthquake, landslide, tsunami, mudslide or
            other catastrophic natural disaster, civil riot, civil rebellion,
            revolution, terrorism, insurrection, militarily usurped power, act
            of sabotage, act of a public enemy, war (whether declared or not) or
            other like hostilities, ionising radiation, contamination by
            radioactivity, nuclear, chemical or biological contamination, any
            widespread illness, quarantine or government sanctioned ordinance or
            shutdown, pandemic (including COVID-19 and any variations or
            mutations to this disease or illness) or epidemic.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            28. <span className="font-semibold">Online entries:</span> If a
            dispute arises as to the identity of an online Entrant, the entry
            will be deemed to have been submitted by the authorised account
            holder of the email address. The Promoter may ask any Entrant to
            provide the Promoter with proof that they are the authorised account
            holder of the email address associated with the entry.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            29. <span className="font-semibold">Legal Warning:</span> Any
            attempt to cause malicious damage or interference with the normal
            functioning of the Site or to otherwise undermine the legitimate
            operations of the Promotion may be a violation of criminal and civil
            laws and the Promoter reserves the right to seek damages to the
            fullest extent permitted by law.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            30. <span className="font-semibold">Social Media:</span> The use of
            social media is subject to the prevailing terms and conditions of
            use of the social media platform. Unless otherwise indicated in
            these Terms and Conditions, the Promotion is in no way sponsored,
            endorsed or administered by, or associated with any social media
            platform. If an Entrant uses social media to participate in the
            Promotion, the Entrant understands that they are providing their
            information to the Promoter and not to any social media platform.
            Entrants are solely responsible and liable for the content of their
            entries and any other information they transmit to other Internet
            users. By participating in the Promotion, the Entrant releases the
            applicable social media site from all claims, liabilities, suits,
            actions and expenses, including costs of litigation and reasonable
            legal costs associate with the Promotion.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            31. <span className="font-semibold">Currency:</span> Unless
            expressly stated otherwise, a reference in these terms or in any
            advertisement relating to the Promotion, to Australian dollars,
            dollars, AUD$ or $ is a reference to the lawful currency of
            Australia.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            32. <span className="font-semibold">Amendments:</span> If for any
            reason any aspect of this Promotion is not capable of running as
            planned, the Promoter may in its sole discretion cancel, terminate,
            modify or suspend the Promotion and invalidate any affected entries,
            or suspend or modify a prize, subject to State or Territory
            regulation
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            33. <span className="font-semibold">Jurisdiction:</span> These Terms
            and Conditions are governed by the laws of the States and
            Territories in which the Promotion is conducted and the Commonwealth
            of Australia. Entrants submit to the jurisdiction of the courts of
            their State or Territory.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            34. Dispute Resolution: In the event of a dispute, Entrants must
            contact the Promoter and attempt to resolve the dispute in good
            faith. If the matter cannot be resolved, either party may refer the
            matter to a mediator. The costs of the mediation will be shared
            equally between the parties.
          </p>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl  special:text-4xl  sm:p-4 p-3  sm:text-left text-justify xl:mt-5 sm:mt-4 mt-3 ">
            35.{" "}
            <span className="font-semibold">Intellectual property rights:</span>{" "}
            All intellectual property rights in the entries vest in the Promoter
            upon submission of the relevant entry. Where the Promotion involves
            submission of any materials including but not limited to answers to
            questions, a statement, idea or opinion, video or voice recordings,
            images, works of art, designs or photographs{" "}
            <span className="font-semibold">(Content)</span>, all Entrants
            represent, warrant and agree that:
            <br />{" "}
            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
              (a) the Content must not contain any viruses or cause or be likely
              to cause any injury or harm to any person or entity;{" "}
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (b) the Content must be the work of the individual submitting
            it;
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (c)	the Content must not have been published elsewhere or have won a prize in any other competition or promotion; 
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (d)	Entrants have obtained all appropriate consents and/or permission relating to a person who appears in, or whose property appears in, the Content;
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (e)	the submission of the Content does not infringe the intellectual property rights of any third party and that the Content they are submitting is their own work and that they own the copyright for it; 
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (f)	the Promoter may remove or decline to publish any Content without notice to the relevant Entrant; 
            </div>

            <div className="sm:ml-5 ml-3 mt-2 sm:mt-3">
            (g)	the Promoter may use their likeness, image and/or voice in the event that the Entrant is the Winner (including photograph, film or recording) in any media whatsoever throughout the world for the purpose of promoting this Promotion or other similar promotions and promoting any products manufactured, distributed and or supplied by the Promoter. The Entrant will not be entitled to any remuneration for such use.
            </div>
             
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
