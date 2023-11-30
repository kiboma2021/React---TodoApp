import React from 'react'
import styles from './Footer.module.css'

export default function Footer(props) {
  return (
    <div>
        <h3 className={styles.title}>{props.footer}</h3>      
    </div>
  )
}
