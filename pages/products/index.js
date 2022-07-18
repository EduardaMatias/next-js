import Link from 'next/link'

export default function Products() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Voltar para home</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}