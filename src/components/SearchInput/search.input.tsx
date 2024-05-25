import React from 'react'
import CompassIcon from '@/components/SearchInput/icon.compass'

interface SearchProps {
    search: string
    onSearchChange: (value: string) => void
}

function SearchInput(props: SearchProps) {
    const { search, onSearchChange } = props

  return (
    <div className='flex w-full max-w-[50%] items-center gap-4 h-[90px] bg-white px-2 py-4'>
      <CompassIcon className='w-16 h-16 rotate-90' fill='rgb(var(--text))' />
      <input type='text' className='w-[90%] h-full text-[32px] text-[rgb(var(--text))] font-bold placeholder:text-[rgb(var(--text))]' placeholder='Buscar cidade...' value={search} onChange={(e) => onSearchChange(e.target.value)}/>
    </div>
  )
}
 
export default SearchInput
