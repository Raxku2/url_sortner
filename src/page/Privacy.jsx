
function Privacy() {

    return (
        <main>
            <header>
                <h1>Privacy Policy</h1>
                <p ><strong>Effective Date:</strong> November 26, 2026</p>
                <p >We built this URL shortener with a simple rule: turning a long link into a short one should not require surrendering your personal life. We collect as little data as technically possible, we never track people who click on links, and we never sell or rent data to anyone.</p>
            </header>

            <section>
                <h2>1. What Happens When Someone Clicks a Short Link</h2>
                <p>When someone opens one of our short links, our server simply looks up the destination address and sends the browser straight there.</p>
                <ul>
                    <li>
                        <strong>No consent popups on redirects</strong>
                        Because we do not drop tracking cookies, run ad scripts, or harvest personal details during a redirect, visitors are taken directly to the target page without an interrupting consent screen.
                    </li>
                    <li>
                        <strong>No visitor profiling</strong>
                        We do not log personal identities, build browsing histories, or track visitors across the web.
                    </li>
                </ul>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <p>We separate how our service handles casual link clicks from registered user accounts:</p>
                <ul>
                    <li>
                        <strong>Visitors clicking short links</strong>
                        Zero personal information is collected or stored.
                    </li>
                    <li>
                        <strong>Quick link creation without an account</strong>
                        If you shorten a link without logging in, we only store the original destination URL and its generated short code so the link works.
                    </li>
                    <li>
                        <strong>Registered accounts</strong>
                        If you choose to create an account to manage, edit, or organize your links, we store only what is needed to run that account. This includes your email address, an encrypted version of your password, or a basic login token if you sign in through an external provider, along with the links you save under your profile. Even when a link is created from a registered account, people clicking that short link are redirected immediately with no tracking and no consent page.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. Security and Abuse Prevention</h2>
                <p>To keep the platform fast, reliable, and safe from automated spam bots, our servers may temporarily check basic technical signals such as request frequency. These automated checks exist solely to block abuse and prevent denial of service attacks. They are not used to identify individuals or track personal behavior.</p>
                <p>We also reserve the right to disable or delete any short link that points to phishing pages, malware, scams, or illegal material.</p>
            </section>

            <section>
                <h2>4. External Websites</h2>
                <p>Our service acts strictly as a bridge to the destination URL provided by the link creator. Once a short link redirects you to an external website, that site operates under its own privacy practices and terms. We are not responsible for the content, security, or data collection of external sites.</p>
            </section>

            <section>
                <h2>5. Data Retention and Deletion</h2>
                <p>We do not hold onto data you no longer want stored. If you have an account, you can delete your saved links or close your entire account at any time. Once deleted, your account details and associated link records are permanently removed from our active database.</p>
            </section>

            <section>
                <h2>6. Cookies and Local Storage</h2>
                <p>We do not use advertising cookies, analytics trackers, or external marketing scripts. If you log into an account, we only use essential session storage strictly necessary to keep you signed in while you manage your links.</p>
            </section>

            <section>
                <h2>7. Legal Compliance</h2>
                <p>Because we do not collect personal data on visitors, we have no visitor records to share. For registered accounts, we will never hand over account details to outside parties unless strictly compelled by a valid, binding legal order.</p>
            </section>

            <section>
                <h2>8. Changes to This Policy</h2>
                <p>If you ever update how the service handles data, we will revise the effective date at the top of this page. Any future changes will stay true to our commitment to minimal data collection.</p>
            </section>

            <section>
                <h2>9. Contact</h2>
                <p>If you have questions about how this service works, need to report an abusive link, or want help removing your account data, please reach out through the support contact provided on our website.</p>
            </section>

            <footer>
                <p>Minimal data. Zero redirect tracking.</p>
            </footer>
        </main>


    );
}
export default Privacy;