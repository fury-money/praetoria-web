import { useRouter } from 'next/router'
import type { NextRouter } from 'next/router'
import { useCallback } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const GoBackButton = (): JSX.Element => {
  const router: NextRouter = useRouter()

  const handleGoBack = useCallback((): void => {
    router.back()
  }, [router])

  return (
    <div className="furya-praetoria-web-go-back-button-container" onClick={handleGoBack}>
      <ArrowBackIcon />
      <span>back</span>
    </div>
  )
}
