import React, { Fragment } from 'react'
import classes from "./title.module.css"
const Title = ({title}) => {
  return (
    <p className={classes.heading}>{title}</p>
  )
}

export default Title