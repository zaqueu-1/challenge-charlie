import React, { useState } from 'react';
import CompassIcon from '@/components/SearchInput/icon.compass'

interface SearchProps {
    onSearchChange: (value: string) => void;
}

function SearchInput(props: SearchProps) {
    const { onSearchChange } = props

    const [search, setSearch] = useState('')

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearchChange(search)
        }
    }

    return (
        <div className='flex w-full max-w-[50%] items-center gap-4 h-[90px] bg-white px-2 py-4'>
            <CompassIcon className='w-16 h-16 rotate-90' fill='rgb(var(--text))' />
            <input
                type='text'
                className='w-[90%] h-full text-[32px] text-[rgb(var(--text))] font-bold placeholder:text-[rgb(var(--text))]'
                placeholder='Buscar cidade...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchInput
