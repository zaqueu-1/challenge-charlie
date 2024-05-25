import React, { useEffect, useState } from 'react';
import CompassIcon from '@/components/SearchInput/icon.compass'

interface SearchProps {
    onSearchChange: (value: string) => void
    location: string
    loading: boolean
}

function SearchInput(props: SearchProps) {
    const { onSearchChange, location, loading } = props

    const [search, setSearch] = useState('')

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearchChange(search)
        }
    }

    useEffect(() => {
        if (!location) return
        setSearch(location)
    }, [location])

    return (
        <div className='flex w-full max-w-[50%] items-center gap-4 h-[90px] bg-white px-2 py-4'>
            <CompassIcon className={`w-16 h-16 rotate-90 ${loading ? 'spinner' : ''}`} fill='rgb(var(--text))' />
            <input
                type='text'
                className='w-[90%] h-full text-[32px] text-[rgb(var(--text))] font-bold placeholder:text-[rgb(var(--text))] focus:outline-none'
                placeholder={loading ? 'Buscando...' : 'Buscar cidade...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
            />
        </div>
    )
}

export default SearchInput
