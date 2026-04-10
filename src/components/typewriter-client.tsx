'use client'

import { useEffect, useState } from 'react'

type Props = Omit<Parameters<typeof animateWriting>[0], 'onTextChange'>

export function TypewriterClient(props: Props) {
  const [text, setText] = useState(
    props.startMode === 'write' ? '' : props.strings[0],
  )

  useEffect(() => {
    return animateWriting({
      ...props,
      onTextChange: setText,
    })
  }, [props])

  return text
}

function animateWriting({
  strings,
  durations,
  startDelay = 0,
  startMode = 'write',
  onTextChange,
}: {
  strings: string[]
  startDelay?: number
  startMode?: 'write' | 'erase'
  durations: { empty: number; write: number; complete: number; erase: number }
  onTextChange: (text: string) => void
}) {
  let lastUpdate = 0
  let currentStringIndex = 0
  let nextOperation: 'write' | 'erase' = startMode
  let currentLength = startMode === 'write' ? 0 : strings[0].length

  const getCurrentString = () => strings[currentStringIndex]

  // Switch for the right duration depending on the current state
  const resolveWaitingTime = () => {
    if (currentLength === 0) {
      return durations.empty
    }
    if (nextOperation === 'write') {
      return durations.write
    }
    if (currentLength === getCurrentString().length) {
      return durations.complete
    }
    return durations.erase
  }

  const update = () => {
    currentLength += nextOperation === 'write' ? 1 : -1

    if (currentLength === 0) {
      // Switch to write mode for the next string after erasing everything
      nextOperation = 'write'
      currentStringIndex = (currentStringIndex + 1) % strings.length
    } else if (currentLength === getCurrentString().length) {
      // Switch to erase mode after writing the whole current string
      nextOperation = 'erase'
    }
  }

  const animate = (time: number) => {
    if (lastUpdate === 0) {
      lastUpdate = time
    }

    const delta = time - lastUpdate
    const waitingTime = resolveWaitingTime()

    // Only update after the duration is over
    if (delta >= waitingTime) {
      lastUpdate = time
      update()
      onTextChange(getCurrentString().slice(0, currentLength))
    }

    animationId = requestAnimationFrame(animate)
  }

  let animationId: number | undefined
  const startId = setTimeout(() => {
    animationId = requestAnimationFrame(animate)
  }, startDelay)

  return () => {
    clearTimeout(startId)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  }
}
