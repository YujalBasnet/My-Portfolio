function Contact(){

return(

<section id="contact"
className="py-20 px-20 bg-slate-950 text-white">


<h2 className="text-4xl font-bold text-center">
Contact
</h2>


<form className="max-w-xl mx-auto mt-10">


<input
className="w-full p-3 mb-4 text-black"
placeholder="Name"
/>


<input
className="w-full p-3 mb-4 text-black"
placeholder="Email"
/>


<textarea
className="w-full p-3 text-black"
placeholder="Message"
/>


<button className="mt-5 bg-cyan-400 px-6 py-3 text-black">

Send Message

</button>


</form>


</section>

)

}

export default Contact;