import CSSModules from 'react-css-modules'
import styles from './styles.css'
import React from 'react'

const Container = ({children}) => (
    <div styleName='container'>
        {children}
    </div>
    )

export default CSSModules(Container, styles)