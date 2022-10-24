import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import './header.scss'
import Link from 'next/link'

import { useMediaType } from '../../../hook/useMediaType'

const MobileMenu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  return (
    <div
      className={
        menuOpen
          ? 'okp4-nemeton-web-header-links-mobile-container open'
          : 'okp4-nemeton-web-header-links-mobile-container'
      }
    >
      <div className="okp4-nemeton-web-header-links-mobile-menu">
        <h2>Menu</h2>
        <div
          className={`okp4-nemeton-web-header-links-mobile-burger-menu ${
            menuOpen ? 'rotate-down' : 'rotate-up'
          }`}
        >
          <Image
            alt="mobile-menu"
            height={30}
            onClick={toggleMenu}
            src="/icons/menu-dark.svg"
            width={30}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="okp4-nemeton-web-header-mobile-menu-links">
          <div className="okp4-nemeton-web-header-mobile-links-divider" />
          <Link href="/phases">
            <h2>Phases</h2>
          </Link>
          <div className="okp4-nemeton-web-header-mobile-links-divider" />
          <Link href="/rewards">
            <h2>Rewards</h2>
          </Link>
          <div className="okp4-nemeton-web-header-mobile-links-divider" />
          <Link href="/faq">
            <h2>F.A.Q</h2>
          </Link>
          <div className="okp4-nemeton-web-header-mobile-links-divider" />
          <Link href="/terms">
            <h2>TERMS</h2>
          </Link>
          <div className="okp4-nemeton-web-header-mobile-links-divider" />
        </div>
      )}
    </div>
  )
}

const DesktopMenu = (): JSX.Element => (
  <div className="okp4-nemeton-web-header-links-container">
    <Link href="/phases">
      <h2>Phases</h2>
    </Link>
    <Link href="/rewards">
      <h2>Rewards</h2>
    </Link>
    <Link href="/faq">
      <h2>F.A.Q</h2>
    </Link>
    <Link href="/terms">
      <h2>TERMS</h2>
    </Link>
  </div>
)

export const Header: React.FC = () => {
  const isLargeScreen = useMediaType('(min-width: 1441px)')
  const isMobileScreen = useMediaType('(max-width: 390px)')

  return (
    <div className="okp4-nemeton-web-header-main">
      <div className="okp4-nemeton-web-header-title-container">
        <h1>Nemeton Program</h1>
      </div>
      <div className="okp4-nemeton-web-header-join-button-container">
        <button>Join the program</button>
      </div>
      <div className="okp4-nemeton-web-header-logo-container">
        {isLargeScreen ? (
          <Image
            alt="okp4-vertical-logo"
            height={275}
            src="/image/okp4-logo-vertical.png"
            width={359}
          />
        ) : (
          <Image
            alt="okp4-inline-logo"
            height={isMobileScreen ? 62 : 76}
            src="/image/okp4-inline-logo.png"
            width={isMobileScreen ? 225 : 273}
          />
        )}
      </div>
      <div className="okp4-nemeton-web-header-description-container">
        <h1>incentivized testnet program</h1>
      </div>
      {!isLargeScreen && <div className="okp4-nemeton-web-header-divider" />}
      {isMobileScreen ? <MobileMenu /> : <DesktopMenu />}
    </div>
  )
}