import getConfig from 'next/config'
import HtmlHead from 'next/head'
import { useRouter } from 'next/router'
import { getLastSegmentInPath } from '../../lib/path'

export type HeadProps = {
  title: string
  keywords: string
  description: string
}

// eslint-disable-next-line @typescript-eslint/typedef
const { publicRuntimeConfig } = getConfig()

export const Head: React.FC<HeadProps> = ({ description, title, keywords }): JSX.Element => {
  const router = useRouter()
  const segment = getLastSegmentInPath(router.pathname)
  const pageTitle = `${title}${segment ? ` | ${segment.toUpperCase()}` : ''}`

  return (
    <HtmlHead>
      <title>{pageTitle}</title>
      <meta content={keywords} name="keywords" />
      <meta content={publicRuntimeConfig.version} name="version" />
      <meta content={description} name="description" />
      <link href="/furya-logo.png" rel="icon" />
    </HtmlHead>
  )
}
