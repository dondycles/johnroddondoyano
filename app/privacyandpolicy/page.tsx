import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: " Privacy and Policy | John Rod Dondoyano",
};
export default function PrivacyAndPolicy() {
  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge className="w-fit mx-auto">Privacy Policy</Badge>
      </h1>
      <div className=" prose  dark:prose-invert text-left max-w-[800px] w-full mx-auto">
        <p className="font-semibold m-0 p-0">Privacy Policy</p>
        <p className="m-0 p-0">Effective Date: February 27, 2024</p>
        <p>
          Thank you for visiting{" "}
          <Link href={"https://johnroddondoyano.com"} target="_blank">
            https://johnroddondoyano.com
          </Link>{" "}
          (the "Website"). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this Privacy Policy, please do not access the website.
        </p>

        <p>
          We reserve the right to make changes to this Privacy Policy at any
          time and for any reason. We will alert you about any changes by
          updating the "Effective Date" of this Privacy Policy. You are
          encouraged to periodically review this Privacy Policy to stay informed
          of updates. You will be deemed to have been made aware of, will be
          subject to, and will be deemed to have accepted the changes in any
          revised Privacy Policy by your continued use of the website after the
          date such revised Privacy Policy is posted.
        </p>

        <p className="font-semibold">Information We Collect:</p>
        <p>
          We collect personal and non-personal information when you access the
          website. Personal information may include your name, email address,
          and any other information you voluntarily provide. Non-personal
          information may include your IP address, browser type, domain names,
          access times, and referring website addresses. We also use cookies to
          collect information about your browsing activities. You can control
          the use of cookies at the individual browser level.
        </p>

        <p className="font-semibold">How We Use Your Information:</p>
        <p>
          We may use the information we collect to: Respond to your inquiries or
          comments. Analyze trends and improve the website's performance.
        </p>
        <p>
          We will not sell, rent, or lease your personal information to third
          parties.
        </p>
        <p className="font-semibold">Third-Party Advertisers:</p>
        <p>
          The website may display advertisements from third-party advertisers.
          These advertisers may use tracking technologies, such as cookies, to
          collect information about users who view or interact with their
          advertisements. We do not provide any personal information to these
          advertisers.
        </p>
        <p className="font-semibold">Links to Other Websites:</p>

        <p>
          The website may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of these
          websites. We encourage you to review the privacy policies of these
          websites.
        </p>
        <p className="font-semibold">Security:</p>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
        <p className="font-semibold">Children's Privacy:</p>
        <p>
          The website is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under the age
          of 13.
        </p>
        <p className="font-semibold">Contact Us:</p>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at johnroddondoyano8@gmail.com.
        </p>
        <p>
          By using the website, you consent to the collection and use of your
          information as outlined in this Privacy Policy.
        </p>
      </div>
      <Footer />
    </main>
  );
}
