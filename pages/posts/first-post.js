import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <p>
                <Link href="/">Back to home</Link>
            </p>
            <h1>First Post!</h1>
        </>
    );
}