import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Webhook Samples"
      description="Collection of webhook data from different platforms">
      <main>
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h1>Webhook Samples</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            A collection of webhooks data from different platforms that distribute webhooks.
            This data is used in console.hookdeck.com "Example Webhooks".
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
              className="button button--primary button--lg"
              to="docs/getting-started-web-analytics">
              Get Started with Web Analytics
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Dustin4444/webhook-samples">
              View on GitHub
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
