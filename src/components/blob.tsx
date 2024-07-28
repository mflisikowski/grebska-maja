import { useId } from 'react'
import { cn } from '@/utils'

interface BlobProps {
  animationRepeatCount?: string
  animationDuration?: string
  animationValues?: string
  className?: string
}

export const Blob: React.FC<BlobProps> = ({
  animationRepeatCount = 'indefinite',
  animationDuration = '10s',
  animationValues = `
    M50,15 C35,15 15,35 15,50 C15,65 35,85 50,85 C65,85 85,65 85,50 C85,35 65,15 50,15 Z;
    M50,20 C30,20 20,30 20,50 C20,70 30,80 50,80 C70,80 80,70 80,50 C80,30 70,20 50,20 Z;
    M50,15 C35,15 15,35 15,50 C15,65 35,85 50,85 C65,85 85,65 85,50 C85,35 65,15 50,15 Z
  `,
  className,
}) => {
  const blobId = useId()

  return (
    <svg
      className={cn(`fill-current`, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      id={`${blobId}-svg`}
      height="100%"
      width="100%"
    >
      <path>
        <animate
          attributeName="d"
          repeatCount={animationRepeatCount}
          values={animationValues}
          dur={animationDuration}
        />
      </path>
    </svg>
  )
}
