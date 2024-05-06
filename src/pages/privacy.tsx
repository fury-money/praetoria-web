import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'

export type PrivacyProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Privacy: NextPage<PrivacyProps> = props => {
  const { urls } = props
  const {
    privacyUrls: { cookiePolicyUrl },
    supportUrls: { discordPraetoriaUrl },
    mailAddresses: { contact }
  } = urls

  return (
    <div className="furya-praetoria-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="furya-praetoria-web-page-content-container" id="privacy-cookie-policy">
          <h1>Privacy & Cookie policy</h1>
          <p>Last updated: October 19, 2022</p>
          <p>
            Furya (hereinafter referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            operates the furya.network website (hereinafter referred to as &quot;the Site&quot;),
            which provides the service (hereinafter referred to as &quot;the Service&quot;). This
            page informs you of our policies regarding the collection, use, and disclosure of
            personal information that we receive from users of the Site, identified below
            (&quot;Personal Information&quot;, or “Information”).
          </p>
          <p>
            We only use your Personal Information to provide, improve and manage the Site. By using
            the Site, you consent to the collection and use of Personal Information in accordance
            with this Privacy Policy. We will not use or share your Personal Information with anyone
            else except as described in this Privacy Policy.
          </p>
          <p>
            Please note that the Site is hosted in France. If you access the Site from another part
            of the world that has laws or other requirements governing the collection, use or
            disclosure of Personal Information that differ from the laws applicable in France, by
            continuing to use the Site, you are transferring your data to France and you agree that
            your data may be transferred to and processed in France.
          </p>
          <div>
            <h2>INFORMATION COLLECTION AND USE</h2>
            <p>
              When you use our Site, we may ask you to provide certain personally identifiable
              Information that can be used to contract or identify you, Personal Information. This
              personally identifiable Information may include, but is not limited to:
            </p>
            <ul>
              <li>
                <p>E-mail address</p>
              </li>
              <li>
                <p>First and last name</p>
              </li>
              <li>
                <p>Address, State, Region, Postal Code, City</p>
              </li>
              <li>
                <p>Usage data</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>WHEN DO WE COLLECT INFORMATION?</h2>
            <p>
              We collect Information when you register on our site, fill out a form or enter
              Information on our site.
            </p>
          </div>
          <div>
            <h2>LOG DATA</h2>
            <p>
              Like many site operators, we collect Information that your browser sends when you
              visit our Site (hereafter referred to as &quot;Log Data&quot;).
            </p>
            <p>
              This data may include Information such as your computer&apos;s IP address, browser
              type, browser version, the pages of our site you visit, the time and date of your
              visit, the time spent per page and other statistical information.
            </p>
            <p>We use the Matomo Analytics tool to collect this Information.</p>
          </div>
          <div>
            <h2>COMMUNICATIONS</h2>
            <p>
              We will only use your Personal Information to contact you to confirm your enrolment in
              the Praetoria Program, to provide you with updates, and for any other Information needed
              to run the Testnet. Your Personal Information will not be shared with third parties
              for marketing or advertising purposes and will not be sold under any circumstances.
            </p>
            <p>We may use your Information to, and not limited to:</p>
            <ul>
              <li>
                <p>To improve our website to better serve you.</p>
              </li>
              <li>
                <p>Better respond to your customer service requests.</p>
              </li>
              <li>
                <p>Administer a contest, promotion, survey, or other site feature.</p>
              </li>
              <li>
                <p>Send periodic emails.</p>
              </li>
              <li>
                <p>Follow up on correspondence.</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>COOKIES</h2>
            <p>
              Cookies are files containing a small amount of data, which may include an anonymous
              unique identifier. Cookies are sent to your browser from a website and stored on your
              computer&apos;s hard drive.
            </p>
            <p>
              Like many sites, we use &quot;Cookies&quot; to collect Information. You can set your
              browser to refuse all cookies or to indicate when a cookie is being sent. To learn
              more about cookies:{' '}
              <a href={cookiePolicyUrl} rel="noreferrer" target="_blank">
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div>
            <h2>SERVICE PROVIDERS</h2>
            <p>We may employ third party companies and individuals for the following reasons:</p>
            <ul>
              <li>
                <p>To facilitate our Service;</p>
              </li>
              <li>
                <p>To provide the Service on our behalf;</p>
              </li>
              <li>
                <p>To perform services related to the Service;</p>
              </li>
              <li>
                <p>To help us analyze how our Service is used.</p>
              </li>
            </ul>
            <p>
              We wish to inform users of our Services that these third parties have access to your
              Personal Information. The reason for this is to perform the tasks assigned to them on
              our behalf. However, they are required not to disclose or use this Information for any
              other purpose.
            </p>
          </div>
          <div>
            <h2>SECURITY</h2>
            <p>
              The security of your Personal Information is important to us, but please remember that
              no method of transmission over the Internet, or method of electronic storage, is 100%
              secure. While we strive to use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security. This Information is accessible
              only to a limited number of individuals who have special access rights to these
              systems and are required to keep this Information confidential.
            </p>
          </div>
          <div>
            <h2>FAIR INFORMATION PRACTICES</h2>
            <p>
              Fair information practice principles are the backbone of privacy legislation and the
              concepts they include have played an important role in the development of data
              protection laws around the world. Understanding the principles of fair information
              practices and how they must be implemented is critical to compliance with the various
              privacy laws that protect Personal Information.
            </p>
            <p>
              To comply with fair information practices, we will take the following steps in the
              event of a data breach:
            </p>
            <ul>
              <li>
                <p>We will notify you by e-mail</p>
              </li>
              <li>
                <p>We will inform users by on-site notification</p>
              </li>
              <li>
                <p>Within 7 business days</p>
              </li>
            </ul>
            <p>
              We also accept the principle of individual redress, which requires that individuals
              have the right to enforceable rights against data collectors and processors who do not
              comply with the law. This principle requires not only that individuals have
              enforceable rights against data users, but also that individuals have recourse to the
              courts or government agencies to investigate and/or prosecute non-compliance by data
              processors.
            </p>
          </div>
          <div>
            <h2>LINKS TO OTHER WEBSITES</h2>
            <p>
              Our Site may contain links to other sites. If you click on a third-party link, you
              will be directed to that site. Note that these external sites are not necessarily
              operated by us. Therefore, we urge you to review the privacy policies of those sites.
              We have no control over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party sites or services. Nevertheless, we seek to
              protect the integrity of our site and welcome any feedback on these sites.
            </p>
          </div>
          <div>
            <h2>CHILDREN’S PRIVATE LIFE</h2>
            <p>
              Our Services are not intended for persons under the age of 13. We do not knowingly
              collect personally identifiable information from children under the age of 13. If we
              discover that a child under the age of 13 has provided us with Personal Information,
              we will immediately delete it from our servers. If you are a parent or guardian and
              you know that your child has provided us with Personal Information, please contact us
              so that we can take appropriate action.
            </p>
          </div>
          <div>
            <h2>MODIFICATION OF THIS AGREEMENT</h2>
            <p>
              This Privacy Policy is effective as of October 14, 2022, and will remain in effect,
              except for changes to its provisions in the future, which will be effective
              immediately upon posting on this page.
            </p>
            <p>
              We reserve the right to update or modify our Privacy Policy at any time and you should
              check this Privacy Policy periodically. Your continued use of the Service after we
              post changes to the Privacy Policy on this page will mean that you acknowledge the
              changes and agree to follow and be bound by the modified Privacy Policy.
            </p>
            <p>
              If we make material changes to this Privacy Policy, we will endeavour to notify you
              either through the email address you have provided or by placing a prominent notice on
              our website.
            </p>
          </div>
          <div>
            <h2>CONTACT US</h2>
            <p>
              If you have any questions about this privacy policy, please contact us in{' '}
              <a href={discordPraetoriaUrl} rel="noreferrer" target="_blank">
                our Praetoria program channel
              </a>{' '}
              on Furya Discord server or at <a href={`mailto:${contact}`}>{'praetoria@furya.com'}</a>
            </p>
            <p>You can also contact us by post using the information below:</p>
            <ul>
              <li>
                <p>Furya</p>
              </li>
              <li>
                <p>1 passage de l’Europe</p>
              </li>
              <li>
                <p>31400 Toulouse</p>
              </li>
              <li>
                <p>France</p>
              </li>
            </ul>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PrivacyProps> = async () => ({
  props: {
    ...config
  }
})

export default Privacy
