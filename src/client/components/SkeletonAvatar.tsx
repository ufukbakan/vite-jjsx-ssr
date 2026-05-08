
import styles from './SkeletonAvatar.module.sass'

interface Props {
    size: 'sm' | 'md' | 'lg'
}

export default function SkeletonAvatar({ size }: Props) {
  return <div className={styles[`avatar-${size}-skeleton`]}></div>
}