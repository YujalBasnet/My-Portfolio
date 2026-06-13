function Navbar(){

return(

<nav className="
fixed top-0 left-0 w-full
bg-slate-950/80
backdrop-blur-md
text-white
px-10 py-5
flex justify-between items-center
z-50
">


<h1 className="
text-3xl font-bold
text-cyan-400
">

Yujal.

</h1>



<ul className="
hidden md:flex
gap-8
">


{

["Home","About","Skills","Projects","Contact"]

.map(item=>(


<li key={item}>


<a

href={`#${item.toLowerCase()}`}

className="
hover:text-cyan-400
transition
"

>

{item}

</a>


</li>


))


}


</ul>


</nav>

)

}


export default Navbar;