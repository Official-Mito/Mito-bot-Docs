
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';

function Hello() {
  const url = 'https://discord.gg/mDF5QPG';
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
