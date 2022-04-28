import TabbedContent from "../components/TabbedContent";
import Disclaimer from "../components/Disclaimer";

const userRoles = [
  {
    heading: "Team Owner",
    content: (
      <>
        <p style={{ fontSize: "1.1rem" }}>
          A team owner is the user who created the team. A team can only have
          one owner and it can be changed later on. A team owner can:
        </p>
        <ul>
          <li>Use the subscription</li>
          <li>View or Pay Invoices</li>
          <li>Change or Cancel subscription for whole team</li>
          <li>Update Payment Method</li>
          <li>Add or Remove Other Members</li>
          <li>Change Member Roles</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Team Admin",
    content: (
      <>
        <p style={{ fontSize: "1.1rem" }}>
          A team can have multiple admins. A member can be granted the Admin
          role by the owner or another admin. A team admin can:
        </p>
        <ul>
          <li>Use the subscription</li>
          <li>View or Pay Invoices</li>
          <li>Add or Remove Other Members</li>
          <li>Change Member Roles</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Team Member",
    content: (
      <p style={{ fontSize: "1.1rem" }}>
        A team member can be added by admin or the team owner. A team member can
        only use the subscription.
      </p>
    ),
  },
];

export const features = [
  {
    heading: "Activate Team Subscription",
    content: (
      <>
        <p style={{ fontSize: "1.1rem" }}>
          To activate subscription for a team, navigate to team management page
          and click View Plans under Billing section. Verify the order summary
          and complete the checkout.
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          If your card requires 3D Auth or OTP verification, click Pay Now under
          the Invoices section.
        </p>
      </>
    ),
  },
  {
    heading: "Add a Member",
    content: (
      <p style={{ fontSize: "1.1rem" }}>
        On your Teams management page, click Add Member button and provide
        user's email address to add user to the Team. Once a team member is
        added, subscription would be shared with the user.
      </p>
    ),
  },
  {
    heading: "Remove a Member",
    content: (
      <p style={{ fontSize: "1.1rem" }}>
        To remove user from a Team, click the Remove icon next to user's name.
        Subscription would no longer be shared with that user.
      </p>
    ),
  },
  {
    heading: "User Roles",
    content: <TabbedContent content={userRoles} />,
  },
  {
    heading: "Update Payment Method",
    content: (
      <p style={{ fontSize: "1.1rem" }}>
        Only the team owner can update the payment method. Click Update Payment
        Method button under the Team billing section and provide the new card
        details.
      </p>
    ),
  },
  {
    heading: "Change or Cancel Subscription",
    content: (
      <p style={{ fontSize: "1.1rem" }}>
        Only the team owner can change or cancel the subscription plan for the
        team. To do so, click the Change Plan button on Manage Teams page.
      </p>
    ),
  },
];

export const faqData = [
  {
    heading: "Can I be a member of multiple Teams?",
    content: (
      <p>
        You can create or join multiple Teams. Team with the longest
        subscription would be selected automatically.
      </p>
    ),
  },
  {
    heading:
      "Can I upgrade from Individual subscription to a Team subscription?",
    content: (
      <p>
        Yes. Cancel your individual subscription after activating a Team
        subscription and we'll refund the adjusted amount of Individual
        subscription.
      </p>
    ),
  },
  {
    heading: "Can I switch licenses from one individual to another?",
    content: (
      <p>
        Yes. Our licenses are licensed to your team and not permanently linked
        to individuals which makes it convenient for the team admin to switch
        licenses.
      </p>
    ),
  },
  {
    heading: "What payment methods are accepted?",
    content: (
      <>
        <p>
          We use Stripe to handle payments and subscriptions. Stripe accepts
          most of the credit and debit cards including VISA, MasterCard and
          AmEx.
        </p>
        <Disclaimer text="UPDATE: Recently some of our premium users have reported issues while using their American Express and Discover cards. You are advised to checkout using a VISA or MasterCard instead. Else write to us at contact@requestly.io and we'll explore other options for you." />
      </>
    ),
  },
  {
    heading: "Why do I need to provide my address?",
    content: (
      <p>
        The address you would provide will be used for Billing purpose only. It
        is only shared with our payment handler, Stripe.
      </p>
    ),
  },
  {
    heading: "My subscription does not get activated after payment.",
    content: (
      <p>
        While most of the subscriptions get activated instantly, some banks take
        some time to confirm the payment status. You can{" "}
        <a
          href="http://app.requestly.io/account/refresh-subscription"
          target="_blank"
          rel="noreferrer"
        >
          Refresh your subscription
        </a>{" "}
        to request an update.
      </p>
    ),
  },
];
