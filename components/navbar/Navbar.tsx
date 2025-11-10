import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {

    return (
        <nav className='flex bg-blue-800/30 p-2 m-2 rounded'>
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {navItems.map(navItem => (
                <ActiveLink key={navItem.href} href={navItem.href} label={navItem.label} />
            ))}
        </nav>
    )
}
