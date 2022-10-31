import type { NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'

export type RewardsProps = Pick<Config, 'title' | 'keywords' | 'urls'>

const Rewards: NextPage<RewardsProps> = ({ keywords, title, urls }) => {
  const { typeformUrl } = urls

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head keywords={keywords} title={title} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="rewards">
          <h1>Rewards</h1>
          <p>Druids will be rewarded with a mix of token rewards + delegation commitment.</p>
          <p>
            1% of the total supply of mainnet tokens will be given to Druids as a reward based on
            their participation and performance during the program.Many more tokens (OKP4 foundation
            vesting) will be delegated to Druids based on their participation and performance during
            the program.
          </p>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export default Rewards
