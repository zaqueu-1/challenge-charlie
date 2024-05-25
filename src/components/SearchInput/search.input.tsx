import React, { useEffect, useState } from 'react';
import { Icons } from '@/components/Icons/icons';

interface SearchProps {
    onSearchChange: (value: string) => void
    location: string
    loading: boolean
}

function SearchInput(props: SearchProps) {
    const { onSearchChange, location, loading } = props

    const [search, setSearch] = useState('')
    const [placeholder, setPlaceholder] = useState(true)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && search.length >= 2) {
            onSearchChange(search)
        }
    }

    const clearInput = () => {
        setSearch('')
        setPlaceholder(false)
    }

    useEffect(() => {
        if (!location) return
        setSearch(location)
    }, [location])

    return (
        <div className='flex w-full max-w-[50%] items-center gap-4 h-[90px] bg-white bg-opacity-90 px-2 py-4 cursor-pointer' onClick={clearInput}>
            <Icons.compass className={`w-16 h-16 rotate-90 ${loading ? 'spinner' : ''} color-[rgb(var(--text))]`} />
            <input
                type='text'
                className='w-[90%] h-full text-[32px] text-[rgb(var(--text))] font-bold bg-transparent placeholder:text-[rgb(var(--text))] focus:outline-none'
                placeholder={loading ? 'Buscando...' : !loading && placeholder ? 'Buscar cidade...' : ''}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => [setPlaceholder(true), setSearch(location)]}
                onKeyDown={handleKeyDown}
                disabled={loading}
            />
        </div>
    )
}

export default SearchInput
