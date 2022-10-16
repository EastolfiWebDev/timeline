import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Link href="/editor">
                <a>Editor</a>
            </Link>
            <Link href="/tutorial">
                <a>Tutorial</a>
            </Link>
        </>
    );
}
