import { goTo } from "@carats/csr"
import { afterMount } from "@carats/hooks"
import './SearchInput.sass'

export default function SearchInput() {
    afterMount(() => {
        const formSubmit = (e: Event) => {
            e.preventDefault()
            const input = (e.currentTarget as HTMLFormElement).querySelector('.search-input') as HTMLInputElement
            const value = input.value
            goTo(`/search?q=${value}`)
        }
        const searchForms = document.querySelectorAll('.search-bar');
        searchForms.forEach(form => {
            form.addEventListener('submit', formSubmit)
        })
        return () => {
            searchForms.forEach(form => {
                form.removeEventListener('submit', formSubmit)
            })
        }
    })
    return (
        <form class="search-bar">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
            <input class="search-input" name="q" type="text" placeholder="Search tokens, wallets..." />
            <button type="submit" class="btn btn-ghost">Search</button>
        </form>
    )
}
