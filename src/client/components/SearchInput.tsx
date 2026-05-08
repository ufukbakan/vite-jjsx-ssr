import { goTo } from "@carats/csr"
import { hydrate } from "@carats/hooks"
import './SearchInput.sass'

export default function SearchInput() {
    hydrate(() => {
        const formSubmit = (e: Event) => {
            e.preventDefault()
            const input = document.getElementById('search-input') as HTMLInputElement
            const value = input.value
            goTo(`/search?q=${value}`)
        }
        document.getElementById('search-bar')?.addEventListener('submit', formSubmit)
        return () => document.getElementById('search-bar')?.removeEventListener('submit', formSubmit)
    })
    return (
        <form id="search-bar">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
            </svg>
            <input id="search-input" name="q" type="text" placeholder="Search tokens, wallets..." />
            <button type="submit" class="btn btn-ghost">Search</button>
        </form>
    )
}
