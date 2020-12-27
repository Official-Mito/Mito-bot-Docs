
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';

function Hello() {
  const url = 'https://discord.com/api/oauth2/authorize?client_id=761469922563063818&permissions=8&scope=bot';
  useEffect(() => {
    window.location.href = url;
  });
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Redirecting from ${siteConfig.title}...`}
    >
      <p>
        Redirecting to <a href={url}>{url}</a>...{' '}
      </p>
    </Layout>
  );
}

export default Hello;
