import style from './SkeletonText.module.scss';

interface Props {
    style?: string
}

export default function SkeletonText(props: Props) {
  return <div class={style.skeletonText} style={props.style || ''}></div>
}