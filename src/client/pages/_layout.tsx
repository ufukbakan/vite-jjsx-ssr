export default function Layout(props: JSX.ComponentProps) {
    return (
        <div>
            <nav><ul>
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul></nav>
            {props.children}
        </div>
    )
}