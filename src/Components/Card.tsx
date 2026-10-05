import {
    FaReact,
    FaStar,
    FaNodeJs,
    FaJsSquare,
    FaJava,
    FaDocker,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiSvelte,
    SiVuedotjs,
    SiPostgresql,
    SiTypescript,
    SiTailwindcss,
    SiRedis,
} from "react-icons/si";

const Card = () => {
    return (
        <>
            {/* ================= Section Heading ================= */}
            <div className="container mx-auto px-4">
                <h2 className="mt-14 mb-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                    Explore the Technologies
                </h2>

                <p className="text-base leading-7 text-slate-500 md:text-lg">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* ================= Cards ================= */}
            <div className="container mx-auto mt-10 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">

                {/* ================= React Card ================= */}
                <div className="flex min-h-92.5 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <FaReact className="text-4xl text-cyan-400" />

                        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                            Popular
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        React
                    </h3>

                    <p className="mt-2 min-h-15 text-sm leading-6 text-slate-500">
                        A declarative, component-based JavaScript library
                        for building modern user interfaces.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-7 items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Frontend
                        </span>

                        <span className="text-slate-500">
                            Beginner-Friendly
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Vue.js Card ================= */}
                <div className="flex min-h-92.5 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiVuedotjs className="text-4xl text-green-500" />

                        <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                            Versatile
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Vue.js
                    </h3>

                    <p className="mt-2 min-h-15 text-sm leading-6 text-slate-500">
                        An approachable, performant, and versatile
                        framework for building web user interfaces.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-7 items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Frontend
                        </span>

                        <span className="text-slate-500">
                            Beginner-Friendly
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.8
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Svelte Card ================= */}
                <div className="flex min-h-92.5 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiSvelte className="text-4xl text-orange-500" />

                        <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                            Fast
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Svelte
                    </h3>

                    <p className="mt-2 min-h-15 text-sm leading-6 text-slate-500">
                        Cybernetically enhanced web apps with
                        compile-time reactivity and zero virtual DOM overhead.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-7 items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Frontend
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.8
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Next.js Card ================= */}
                <div className="flex min-h-92.5 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <SiNextdotjs className="text-xl text-white" />
                        </div>

                        <span className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                            SSR / Edge
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Next.js
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        The React framework for full-stack web
                        applications with hybrid static and server rendering.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Frontend
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Node.js Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <FaNodeJs className="text-4xl text-green-500" />

                        <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                            Standard
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Node.js
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        An asynchronous event-driven JavaScript
                        runtime built on Chrome's V8 engine.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Backend
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.8
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= PostgreSQL Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiPostgresql className="text-4xl text-[#336791]" />

                        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                            Top SQL
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        PostgreSQL
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        A powerful, open-source object-relational
                        database system with proven reliability.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Database
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Redis Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiRedis className="text-4xl text-red-600" />

                        <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                            Cache
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Redis
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        In-memory data structure store used as a
                        high-speed database, cache, and message broker.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Database
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.8
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= JavaScript Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <FaJsSquare className="text-4xl text-yellow-400" />

                        <span className="rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600">
                            Ubiquitous
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        JavaScript
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        The versatile, ubiquitous scripting language
                        powering dynamic behavior across the web.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Language
                        </span>

                        <span className="text-slate-500">
                            Beginner-Friendly
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= TypeScript Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiTypescript className="text-4xl text-blue-600" />

                        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                            Essential
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        TypeScript
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        A strongly typed programming language that
                        builds on JavaScript for robust tooling.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Language
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Java Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <FaJava className="text-4xl text-red-500" />

                        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                            Robust
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Java
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        A secure, object-oriented programming language
                        designed for portability and scale.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Language
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.6
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Tailwind CSS Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <SiTailwindcss className="text-4xl text-cyan-400" />

                        <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-600">
                            Modern
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Tailwind CSS
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        A utility-first CSS framework packed with
                        classes that can be composed to build custom UI.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            Styling
                        </span>

                        <span className="text-slate-500">
                            Beginner-Friendly
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>


                {/* ================= Docker Card ================= */}
                <div className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                    <div className="flex items-start justify-between">
                        <FaDocker className="text-4xl text-sky-500" />

                        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                            Containers
                        </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                        Docker
                    </h3>

                    <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                        A platform designed to build, share, and run
                        containerized applications reliably.
                    </p>

                    <div className="my-5 border-t border-slate-100"></div>

                    <div className="flex min-h-[28px] items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                            DevOps
                        </span>

                        <span className="text-slate-500">
                            Intermediate
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <FaStar className="text-yellow-400" />
                            4.9
                        </span>
                    </div>

                    <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#080d1b] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>

            </div>
        </>
    );
};

export default Card;