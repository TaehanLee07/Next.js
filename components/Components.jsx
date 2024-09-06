/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NSyNoaHCPPz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-[#1A1C2C] px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <MoonIcon className="h-6 w-6 text-[#FFCC66]" />
                    <span className="sr-only">Project Moon</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#FFCC66] hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Features
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#FFCC66] hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#FFCC66] hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1C2C]">
                    <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter text-[#FFCC66] sm:text-5xl xl:text-6xl/none">
                                    Explore the Limbus Company
                                </h1>
                                <p className="max-w-[600px] text-[#B3B3B3] md:text-xl">
                                    Join the fight against the Abyss and uncover the secrets of the Limbus Company.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#FFCC66] px-8 text-sm font-medium text-[#1A1C2C] shadow transition-colors hover:bg-[#FFCC66]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Join Now
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#B3B3B3] bg-[#1A1C2C] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#2C2E41] hover:text-[#FFCC66] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="550"
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2C2E41]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-[#1A1C2C] px-3 py-1 text-sm text-[#FFCC66]">
                                    Key Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter text-[#FFCC66] sm:text-5xl">
                                    Uncover the Mysteries of Limbus
                                </h2>
                                <p className="max-w-[900px] text-[#B3B3B3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore the dark and mysterious world of the Limbus Company, where the line between reality and the
                                    Abyss is blurred. Uncover the secrets of this enigmatic organization and become a part of the fight
                                    against the forces of darkness.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-[#FFCC66]">Immersive Storytelling</h3>
                                            <p className="text-[#B3B3B3]">
                                                Dive into a captivating narrative that blends supernatural elements with gritty realism.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-[#FFCC66]">Strategic Gameplay</h3>
                                            <p className="text-[#B3B3B3]">
                                                Engage in tactical battles and make crucial decisions that shape the course of the story.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-[#FFCC66]">Unique Characters</h3>
                                            <p className="text-[#B3B3B3]">
                                                Discover a diverse cast of characters, each with their own motivations and abilities.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1C2C]">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter text-[#FFCC66] md:text-4xl/tight">
                                Join the Fight Against the Abyss
                            </h2>
                            <p className="max-w-[600px] text-[#B3B3B3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Become a part of the Limbus Company and help uncover the secrets of the Abyss. Together, we can fight
                                against the forces of darkness and restore balance to the world.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#FFCC66] px-8 text-sm font-medium text-[#1A1C2C] shadow transition-colors hover:bg-[#FFCC66]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Join Now
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#B3B3B3] bg-[#1A1C2C] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#2C2E41] hover:text-[#FFCC66] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-[#2C2E41] border-t">
                <p className="text-xs text-[#B3B3B3]">&copy; 2024 Project Moon. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs text-[#FFCC66] hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs text-[#FFCC66] hover:underline underline-offset-4" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-xs text-[#FFCC66] hover:underline underline-offset-4" prefetch={false}>
                        Contact Us
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function MoonIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}