import { useState } from "react";
import axios from "axios";


function Contact(){

    const [formData,setFormData] = useState({

        name:"",
        email:"",
        message:""

    });


    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };


    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                formData
            );


            alert("Message sent successfully");


            setFormData({

                name:"",
                email:"",
                message:""

            });


        }
        catch(error){

            console.log(error);

            alert("Failed to send message");

        }

    };


    return(

        <section
        id="contact"
        className="py-20 px-20 bg-slate-950 text-white">


            <h2 className="text-4xl font-bold text-center">

                Contact Me

            </h2>



            <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mt-10">


                <input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
p-3
mb-4
rounded
bg-white
text-black
border
border-gray-300
focus:outline-none
focus:ring-2
focus:ring-cyan-400
"

/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Your Email"

className="
w-full
p-3
mb-4
rounded
bg-white
text-black
border
border-gray-300
focus:outline-none
focus:ring-2
focus:ring-cyan-400
"

/>


<textarea

name="message"

value={formData.message}

onChange={handleChange}

placeholder="Your Message"

rows="5"

className="
w-full
p-3
rounded
bg-white
text-black
border
border-gray-300
focus:outline-none
focus:ring-2
focus:ring-cyan-400
"

/>


                <button

                className="
mt-5
bg-cyan-400
px-8
py-3
rounded
text-black
font-bold
hover:bg-cyan-300
transition
">

                    Send Message

                </button>



            </form>


        </section>

    )

}


export default Contact;