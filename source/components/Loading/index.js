import React from 'react'
import styles from './styles.css'
import CSSModules from 'react-css-modules'

const Loading = ({cancel}) => (
    <div>
        <div styleName='loading'>
            
        </div>
        <div styleName='cancel' onClick={cancel}>cancel</div>
    </div>
    )

export default CSSModules(Loading, styles)