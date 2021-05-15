import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

export const TagContext = createContext()

export const useTags = () => {
	const { selectedTags, setSelectedTags } = useContext(TagContext)

	const selectTag = tag =>
		(selectedTags ?? []).includes(tag)
			? setSelectedTags(selectedTags.filter(t => t != tag))
			: setSelectedTags(selectedTags.concat(tag))

	return {
		selectedTags,
		selectTag
	}
}
