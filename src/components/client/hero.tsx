'use client'

import { TypeAnimation } from 'react-type-animation'

interface HeroTypeAnimationProps
  extends React.ComponentProps<typeof TypeAnimation> {}

export default function HeroTypeAnimation(props: HeroTypeAnimationProps) {
  return <TypeAnimation {...props} />
}
