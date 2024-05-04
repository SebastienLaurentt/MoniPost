import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

const page = () => {
  return (
    <main>
      <Section marginBottom={true} marginTop={true}>
        <PageTitle title="Privacy Policy of MobiPost" />
        <div className="flex flex-col gap-y-4">
          <div>
            <h2>Last Updated: 05.04.24 </h2>
            <p>
              Thank you for your interest in MoniPost. The privacy of our
              visitors is very important to us. This privacy policy describes
              the types of personal information we collect and how we use it.
            </p>
          </div>

          <div>
            <h2>Collection and Use of Information</h2>
            <p>
              When you visit MoniPost, we may collect personal information such
              as your name, email address, and IP address. We use this
              information to enhance your experience on our site and to provide
              you with the services you request.
            </p>
            <p>
              We also use cookies and other tracking technologies to gather
              information about your use of our site. This information may
              include your browser type, pages visited, and time spent on our
              site. We use this data to personalize the content and ads
              presented to you, as well as to analyze site traffic.
            </p>
          </div>

          <div>
            <h2>Disclosure of Information</h2>
            <p>
              We do not sell, rent, or share your personal information with
              third parties, except in the following cases:
            </p>
            <ul>
              <li>
                When necessary to provide the services you request (e.g.,
                sharing your address with a delivery service to ship an order).
              </li>
              <li>
                When required by law or when we believe in good faith that
                disclosure is necessary to protect our rights, property, or
                safety, or to respond to a government request.
              </li>
            </ul>
          </div>

          <div>
            <h2>Information Security</h2>
            <p>
              We take security measures to protect your personal information
              from unauthorized access, use, or disclosure. However, please note
              that no method of transmission over the Internet or electronic
              storage is completely secure, and we cannot guarantee the absolute
              security of your information.
            </p>
          </div>

          <div>
            <h2>Changes to the Privacy Policy</h2>
            <p>
              We reserve the right to modify this privacy policy at any time.
              Any changes will be posted on this page along with an updated
              date.
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at [contact email address].
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default page;
