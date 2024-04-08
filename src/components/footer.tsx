import Link from 'next/link';

export default function Footer () {
    return(
        <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 text-sm">
            <Link href="/" className="mx-3 underline">Legal Notice</Link>
            <Link href="/" className="mx-3 underline">Contact</Link>
        </div>
    );
};