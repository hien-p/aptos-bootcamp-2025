import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // SEO Head Configuration
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Aptos Bootcamp 2025" />
        <meta property="og:description" content="Learn Aptos blockchain development from zero to hero. Join our comprehensive bootcamp covering Move programming, smart contracts, DeFi, and more." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vbi_academy" />
        <meta name="twitter:title" content="Aptos Bootcamp 2025 | VBI Academy" />
        <meta name="twitter:description" content="Join Aptos Bootcamp 2025 to master blockchain development on Aptos. Learn Move language, smart contracts, and build real-world DApps." />
        <meta property="og:image" content="https://aptos-bootcamp-2025.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feat.93173bf5.png&w=3840&q=75" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },

  // Your existing configuration
  logo: <span>My Documentation Site</span>,
  project: {
    link: 'https://github.com/hien-p/aptos-bootcamp-2025',
  },
  chat: {
    link: 'https:invite//discord.gg/your-discord-',
  },
  docsRepositoryBase: 'https://github.com/hien-p/aptos-bootcamp-2025',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },

  // Additional SEO configuration
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Aptos Bootcamp 2025',
      description: 'Comprehensive Aptos blockchain development bootcamp by VBI Academy. Learn Move programming, smart contracts, and build decentralized applications.',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://aptos-bootcamp.vbiacademy.tech',
        siteName: 'Aptos Bootcamp 2025'
      },
      additionalMetaTags: [
        {
          name: 'keywords',
          content: 'aptos, blockchain, move language, smart contracts, web3, cryptocurrency, DeFi, NFT, blockchain development, VBI Academy'
        }
      ]
    }
  }
}

export default config