import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { GoBackButton } from '../../components/button/goBackButton'
import { Head } from '../../components/head/Head'
import { Footer } from '../../components/layout/footer/Footer'
import { Header } from '../../components/layout/header/Header'
import { useQValidatorQuery } from '../../graphql/generated/query/types'
import { config } from '../../lib/config'
import type { Config } from '../../types/config.type'
import client from '../../graphql/apolloClient'
import { Profile } from '../../components/profile/profile'
import { Dragoon } from '../../entity/dragoon'
import { Snackbar } from '../../components/snackbar/Snackbar'
import { TasksSummary } from '../../components/tasks/TasksSummary'
import { LottieLoader } from '../../components/loader/LottieLoader'
import hatDragoonAnimationData from '../../../public/json/hat-dragoon.json'
import { useMediaType } from '../../hook/useMediaType'
import { mapValidatorDTOToDragoon } from '../../graphql/dto/mapper'

export type DragoonProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Dragoon: NextPage<DragoonProps> = props => {
  const [dragoon, setDragoon] = useState<Dragoon | null>(null)
  const [address, setAddress] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const isMobileScreen = useMediaType('(max-width: 580px)')

  const router = useRouter()
  const { urls } = props
  const { graphqlUri } = urls
  const { id } = router.query
  const gqlClient = useMemo(() => client(graphqlUri), [graphqlUri])

  const { loading } = useQValidatorQuery({
    variables: { valoper: id as string },
    skip: !id,
    client: gqlClient,
    fetchPolicy: 'network-only',
    onCompleted: data => data.validator && setDragoon(mapValidatorDTOToDragoon(data.validator)),
    onError: error => {
      console.error(error)
      setErrorMessage(
        'Oops... Dragoon profile could not be properly retrieved... Please try again later.'
      )
    }
  })

  const handleCopyAddress = useCallback(
    (address: string) => {
      setAddress(address)
    },
    [setAddress]
  )

  const handleSnackbarClose = useCallback(() => {
    setAddress('')
  }, [setAddress])

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null)
  }, [setErrorMessage])

  return (
    <>
      <div className="furya-praetoria-web-page-main">
        <Head {...props} />
        <main>
          <Header />
          <div className="furya-praetoria-web-page-content-container" id="profile">
            <div className="furya-praetoria-web-page-dragoon-main-container">
              <GoBackButton />
              {loading && (
                <div className="furya-praetoria-web-loader-container">
                  <LottieLoader
                    animationData={hatDragoonAnimationData}
                    width={isMobileScreen ? 80 : 160}
                  />
                  <span>Loading dragoon...</span>
                </div>
              )}
              {dragoon && !loading && (
                <>
                  <Profile
                    dragoonProfile={dragoon.profile}
                    explorerUrl={urls.explorerUrl}
                    onValoperCopied={handleCopyAddress}
                  />
                  <TasksSummary points={dragoon.profile.points} tasksPerPhase={dragoon.tasksPerPhase} />
                </>
              )}
            </div>
          </div>
          <Footer urls={urls} />
        </main>
      </div>
      <Snackbar
        isOpen={!!address}
        message="Address copied to clipboard!"
        onClose={handleSnackbarClose}
        severityLevel="success"
      />
      <Snackbar
        isOpen={!!errorMessage}
        message={errorMessage ?? ''}
        onClose={resetErrorMessage}
        severityLevel="error"
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<DragoonProps> = async () => ({
  props: {
    ...config
  }
})

export default Dragoon
