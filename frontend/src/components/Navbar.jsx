function Navbar(){

    return(
        <nav className="fixed top-0 w-full bg-slate-900 text-white px-10 py-5 flex justify-between items-center z-50">

            <h1 className="text-3xl font-bold text-cyan-400">
                Yujal.
            </h1>


            <ul className="flex gap-8">

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#skills">Skills</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>

        </nav>
    )
}


export default Navbar;