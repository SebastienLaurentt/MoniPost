import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

const Tes = () => {
  return (
    <main>
      <Section marginBottom={true} marginTop={true}>
        <PageTitle title="Terms of Use of MoniPost" />
        <div className="flex flex-col gap-y-4">
          <div>
            <h2>Last Updated: 05.04.24 </h2>
            <p>
              Thank you for your interest in MoniPost. The following terms
              govern your use of our website. By accessing MoniPost, you agree
              to these terms in full. If you do not agree to these terms, please
              do not use our site.
            </p>
          </div>

          <div>
            <h2>Use of the Site</h2>
            <p>
              You agree to use MoniPost only for lawful purposes and in
              accordance with these terms. You agree not to use our site in a
              way that violates local, national, or international laws.
            </p>
          </div>

          <div>
            <h2>Intellectual Property</h2>
            <p>
              The content and visual elements on MoniPost, including but
              not limited to text, images, logos, and videos, are the property
              of MoniPost or its licensors and are protected by copyright
              laws and other intellectual property laws. You agree not to
              reproduce, distribute, modify, or exploit the content of our site
              in any way without our prior written consent.
            </p>
          </div>

          <div>
            <h2>Links to Third-Party Sites</h2>
            <p>
              Our site may contain links to third-party websites. These links
              are provided for your convenience only and do not imply our
              endorsement of the linked sites. We disclaim any responsibility
              for the content of these third-party sites.
            </p>
          </div>

          <div>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, MoniPost and
              its affiliates disclaim all liability for any direct, indirect,
              incidental, special, or consequential damages arising from your
              use of our site or your inability to use it.
            </p>
          </div>

          <div>
            <h2>Modification of Terms of Use</h2>
            <p>
              We reserve the right to modify these terms of use at any time.
              Changes will be effective upon posting on this page. It is your
              responsibility to regularly check this page for any changes.
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding these terms of use, please
              contact us at monipost@contact.com.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Tes;
