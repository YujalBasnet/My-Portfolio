import {
FaReact,
FaNodeJs,
FaGitAlt,
FaGithub,
FaJava,
FaDatabase,
FaPython,
FaHtml5,
FaCss3Alt
} from "react-icons/fa";

import {
SiJavascript,
SiExpress,
SiMysql
} from "react-icons/si";



function Skills(){


const skills=[


{
name:"React",
icon:<FaReact />,
color:"text-cyan-400"
},


{
name:"JavaScript",
icon:<SiJavascript />,
color:"text-yellow-400"
},


{
name:"Node.js",
icon:<FaNodeJs />,
color:"text-green-500"
},


{
name:"Express",
icon:<SiExpress />,
color:"text-gray-300"
},


{
name:"MySQL",
icon:<SiMysql />,
color:"text-blue-400"
},


{
name:"Java",
icon:<FaJava />,
color:"text-orange-400"
},


{
name:"Git",
icon:<FaGitAlt />,
color:"text-red-400"
},


{
name:"GitHub",
icon:<FaGithub />,
color:"text-white"
},

{
    name:"Python",
    icon:<FaPython />,
    color:"text-blue-500"
},

{
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-600"
},
{
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-600"
},


];




return(


<section

id="skills"

className="
py-24
px-10
md:px-20
bg-slate-950
text-white
"


>


<h2

className="
text-4xl
font-bold
text-center
text-cyan-400
mb-12
"

>

Skills

</h2>





<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"


>


{

skills.map((skill,index)=>(


<div

key={index}

className="
bg-slate-800
rounded-xl
p-6
flex
flex-col
items-center
justify-center
gap-4
hover:-translate-y-2
transition
duration-300
shadow-lg
"


>


<div

className={`
text-5xl
${skill.color}
`}


>

{skill.icon}

</div>




<h3

className="
text-lg
font-semibold
"

>

{skill.name}

</h3>




</div>


))


}



</div>





</section>


)

}


export default Skills;