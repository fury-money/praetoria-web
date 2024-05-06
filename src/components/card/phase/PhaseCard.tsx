import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaType } from '../../../hook/useMediaType'
import type { TaskDTO, Duration, PhaseStatus } from '../../../data/phase/dto.type'
import { PhaseDropDown } from '../../dropDown/phase/PhaseDropDown'

export type PhaseCardProps = Readonly<{
  number: number
  phaseName: string
  phaseDescription: string
  tasks: TaskDTO[]
  phaseDuration?: Duration
  status: PhaseStatus
}>

export const PhaseCard = ({
  number,
  phaseName,
  phaseDescription,
  tasks,
  phaseDuration,
  status
}: PhaseCardProps): JSX.Element => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)
  const dropDownContainerRef = useRef<HTMLDivElement | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const toggleDropDown = useCallback(() => {
    setIsDropDownOpen(!isDropDownOpen)
  }, [isDropDownOpen])

  useEffect(() => {
    if (isDropDownOpen) {
      dropDownContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [isDropDownOpen])

  const mask = (
    <div className="furya-praetoria-web-phase-card-mask-container">
      <div className="furya-praetoria-web-phase-card-mask-divider" />
      <h2>Coming Soon</h2>
      <div className="furya-praetoria-web-phase-card-mask-divider" />
    </div>
  )

  const buttonChallenges = (
    <div className="furya-praetoria-web-phase-card-content-button-container" onClick={toggleDropDown}>
      <span className="furya-praetoria-web-phase-card-button right">Challenges & Rewards</span>
    </div>
  )

  return (
    <div className="furya-praetoria-web-phase-card-main">
      <div className={classNames('furya-praetoria-web-phase-card-container', phaseName)}>
        <div
          className={classNames(
            'furya-praetoria-web-phase-card-content-container',
            { 'no-border': status === 'coming' },
            phaseName
          )}
        >
          {status === 'coming' && mask}
          <div className={classNames('furya-praetoria-web-phase-card-content-details', phaseName)}>
            <div className="furya-praetoria-web-phase-card-content-title">
              <h2>Phase {number}</h2>
              <h1>{phaseName}</h1>
            </div>
            <p>{phaseDescription}</p>
            {!isMobileScreen && status !== 'coming' && buttonChallenges}
          </div>
        </div>
      </div>
      {isMobileScreen && status !== 'coming' && buttonChallenges}
      {isDropDownOpen && phaseDuration && (
        <PhaseDropDown
          onClose={toggleDropDown}
          phaseDuration={phaseDuration}
          phaseName={phaseName}
          refObj={dropDownContainerRef}
          tasks={tasks}
        />
      )}
    </div>
  )
}
