
import style from './SkeletonCard.module.scss';

interface Props {
    style?: string
}

export default function SkeletonCard(props: Props) {
  return (
    <div class={style.skeletonCard} style={props.style || ''}></div>
  );
}