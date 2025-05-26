import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Profile from '/home/modther/Project/card_links/src/assets/profile.jpg'

function Id (){

    return(
         <div className='w-full h-screen flex justify-center items-center bg-amber-600 mx-auto'>
        

        <div className='w-full max-w-100  border-2  mx-auto rounded-xl shadow-md '>

          {/* Navbar */ }
         <div className='h-8 w-full bg-fuchsia-400 rounded-t-xl p-1 pl-2 flex items-center justify-between'>
            <span className='font-serif pl-4'>Contact Me</span>

            <div className='flex items-center gap-1 pr-6'>
              <a href="" target='_blank' className="group">
                <FaLinkedinIn className="text-black group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="" target='_blank' className="group">
                <FaGithub className="text-black group-hover:text-gray-100 transition-colors duration-300" />
              </a>
            </div>
          </div>
          {/* Navbar done */}


        <div className="flex">
          {/* Left column: Small profile image */}
          <div className="w-1/4 m-6 ">
            <div className="w-32 h-32 aspect-square">
              <img className=" object-cover object-center w-full h-full rounded" src={Profile} alt="profile" />
            </div>
          </div>

          {/* Right column: Profile info */}
          <div className="px-6 w-3/4 font-serif">
            <div className="text-sm underline underline-offset-8 py-2">
              <h2 className="text-gray-800 mt-3">Name: John Doe</h2>
              <p className="text-gray-600 mt-3">Pseudonym: ShadowCoder</p>
              <p className="text-gray-600 mt-3">Profession: Software Developer</p>
            </div>
            <p className="text-sm">
              Check professional experience
              Explore my apps or read my blog
            </p>
          </div>
          </div>

          
          



        </div>
      </div>
    )
}

export default Id