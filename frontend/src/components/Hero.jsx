function Hero(){

    return(

        <section 
        id="home"
        className="min-h-screen flex items-center justify-between px-20 bg-slate-950 text-white">


            <div className="max-w-xl">

                <h1 className="text-6xl font-bold">

                    Hi, I'm 
                    <span className="text-cyan-400">
                        {" "}Yujal
                    </span>

                </h1>


                <h2 className="text-2xl mt-5">
                    Full Stack Developer
                </h2>


                <p className="mt-5 text-gray-300 leading-8">

                    Computer Science student passionate about
                    building modern web applications using React,
                    Node.js and databases.

                </p>


                <button className="mt-8 bg-cyan-400 px-6 py-3 rounded text-black font-bold">

                    View Projects

                </button>


            </div>



            <div>

                <img

                src="/profile.jpg"

                className="w-80 h-80 rounded-full border-4 border-cyan-400"

                />

            </div>


        </section>

    )

}


export default Hero;