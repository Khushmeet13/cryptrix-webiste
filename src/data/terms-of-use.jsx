export const meta = {
  title: "Terms of Use",
  lastUpdated: "January 23, 2024",
};

export const sections = [
  {
    id: "intro",
    title: "Introduction",
    content: (
      <>
        <p>
          These Terms of Use (“Terms”) outline the rules, responsibilities, and
          obligations that apply when you access or use our website, platform,
          interfaces, or any related services (collectively, the “Services”). By
          accessing or using the Services, you agree to comply with these Terms
          in full.
        </p>

        <p className="mt-4">
          These Terms operate together with our{" "}
          <a href="/legal/privacy-policy" className="text-indigo-400 underline">
            Privacy Policy
          </a>{" "}
          and any other documents expressly incorporated. If you do not agree
          with any part of these Terms, please discontinue use of the Services.
          By using our Services, you represent and warrant that you are at least
          18 years of age (or the legal age of majority in your jurisdiction),
          fully capable of entering into a binding agreement, and not prohibited
          from using such Services under applicable laws.
        </p>
      </>
    ),
  },

  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <p>
        By using our Services, you represent and warrant that you are at least
        18 years of age (or the legal age of majority in your jurisdiction),
        fully capable of entering into a binding agreement, and not prohibited
        from using such Services under applicable laws.
      </p>
    ),
  },

  {
    id: "interfaces",
    title: "The Interfaces and Features",
    content: (
      <>
        <p>
          Our platform provides access to tools, dashboards, information, and
          interactive features that allow users to explore, analyze, and
          interact with blockchain-related services and technologies. Your
          continued use of these interfaces constitutes acceptance of these
          Terms and all updates that may be introduced over time.
        </p>
      </>
    ),
  },

  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to engage in any activity that:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Violates any applicable law or regulation;</li>
          <li>Attempts to disrupt, interfere, or damage the platform;</li>
          <li>
            Involves unauthorized access, scraping, or data extraction from the
            Services;
          </li>
          <li>
            Misuses or manipulates any part of the platform for malicious or
            fraudulent purposes;
          </li>
          <li>
            Attempts to copy, reverse-engineer, or derive the source code of any
            part of the Services.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "accounts",
    title: "User Accounts",
    content: (
      <>
        <p>
          If the Services require an account, you are responsible for
          maintaining the confidentiality of your login credentials and for all
          actions taken under your account. You must notify us immediately if
          you suspect unauthorized access.
        </p>
      </>
    ),
  },

  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          The platform may include links, tools, or integrations that rely on
          third-party platforms. We do not control or endorse any third-party
          service and are not responsible for their content, policies, or
          actions.
        </p>
      </>
    ),
  },

  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content, branding, text, graphics, interfaces, and other materials
          available on the platform are owned or licensed by us and protected by
          intellectual property laws. You may not reproduce, modify, or
          distribute any content without prior written permission.
        </p>
      </>
    ),
  },

  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          The Services are provided on an “as is” and “as available” basis
          without warranties of any kind, whether express or implied. We make no
          guarantees regarding reliability, performance, availability, or
          accuracy of the Services.
        </p>
      </>
    ),
  },

  {
    id: "limitation",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, we shall not be liable for any
          direct, indirect, incidental, special, or consequential damages
          arising from your use—or inability to use—the Services.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We reserve the right to update or modify these Terms at any time. Any
          changes will be reflected on this page with a revised “Last Updated”
          date. Your continued use of the Services after such updates
          constitutes acceptance of the new Terms.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions or concerns regarding these Terms, you may
          contact our support team at:{" "}
          <a
            href="mailto:support@sapherchain.com"
            className="text-indigo-400 underline"
          >
            support@sapherchain.com
          </a>
        </p>
      </>
    ),
  },
];
