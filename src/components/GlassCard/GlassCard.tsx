import React, { FC } from 'react';
import SoundEffects from '../SoundEffects/SoundEffects';
import './GlassCard.scss';

type ComponentWithChildProps = React.PropsWithChildren<{styles?: Record<string, string | number>}>;

const GlassCard : FC<ComponentWithChildProps> = ({children, styles}) => {
  return (
    <div className='kripsonui-glass-card' style={{...styles, backgroundColor: 'unset'}}>
        <div className='kripsonui-glass-card-background' style={{ backgroundColor: styles?.backgroundColor ? styles.backgroundColor as string : ''}}>
        <SoundEffects/>
        </div>
        {children}
    </div>
  )
}

export default GlassCard;