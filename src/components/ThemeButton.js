import React, { useEffect, useState } from 'react'
import { Switch } from '@blueprintjs/core'

const ThemeButton = () => {
	const [isDarkTheme, setDarkTheme] = useState(true)

	useEffect(() => {
		if (isDarkTheme) {
			document.body.classList.remove('light')
		} else {
			document.body.classList.add('light')
		}
	}, [isDarkTheme])

	return (
		<Switch
			checked={isDarkTheme}
			label="Dark Theme"
			onChange={() => setDarkTheme(!isDarkTheme)}
		></Switch>
	)
}

export default ThemeButton
