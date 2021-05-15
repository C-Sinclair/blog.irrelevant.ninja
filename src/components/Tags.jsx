import { useState } from 'preact/hooks'
import { useTags } from '../hooks'
import { IoMdResize, IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const DEFAULT_MAX_VISIBLE = 7

// TODO generate the tags json and import that
const tags = []

export const Tags = () => {
  const [open, setOpen] = useState(false)
  const { selectedTags, selectTag } = useTags()

  const handleClick = tag => () => selectTag(tag)

  return (
    <Card open={open}>
      <h4>Tags</h4>
      {tags.length > DEFAULT_MAX_VISIBLE && !open ? (
        <IoMdResize size={14} onClick={() => setOpen(true)} />
      ) : (
        <IoMdClose size={14} onClick={() => setOpen(false)} />
      )}
      <ol>
        {tags
          .reduce(
            (acc, item, index) => (open || index < DEFAULT_MAX_VISIBLE ? [...acc, item] : acc),
            []
          )
          .map(({ tag, totalCount }) => (
            <Tag selected={selectedTags.includes(tag)} onClick={handleClick(tag)}>
              <p>{tag}</p>
              <Count>
                <p>{totalCount}</p>
              </Count>
            </Tag>
          ))}
      </ol>
    </Card>
  )
}

const Card = styled.div`
  background: ${({ theme }) => theme.palette.dark};
  padding: 10px;
  position: absolute;
  transition: all 0.5s ease;
  top: ${({ open }) => (open ? -185 : 0)}px;
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  h4 {
    color: #fff;
  }
`

const Tag = styled.div`
  display: flex;
  font-size: 0.8em;
  background: ${({ theme, selected }) => (selected ? 'green' : theme.palette.dark)};
  font-weight: 500;
  align-items: center;
  height: 30px;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-right: 5px;
  &:hover {
    background: ${({ theme }) => theme.palette.lightest};
  }
  p {
  }
`

const Count = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.light};
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-top: 5px;
  p {
    text-align: center;
    margin-bottom: 0px;
    font-size: 0.8em;
  }
`
