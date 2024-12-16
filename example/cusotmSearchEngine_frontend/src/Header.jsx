import logo1 from "../src/assets/miracle.png";
import logo2 from "../src/assets/Digital_Summit_24_Logo_Dark.svg";

const Header = () => {
  return (
    <>
     <header className=" h-16 md:h-20 w-full bg-white shadow-sm flex justify-between items-center ">
      <div className="container px-4 py-2 md:px-0 sm:py-4 ">
        <img
          src={logo1} 
          alt="Miracle logo" 
          width={190} 
         
         
        />
        </div>
      
      <div className="flex pr-4 px-2 items-center space-x-5">
       
          <img
          src={logo2} 
          alt="Digital Summit 24 logo" 
          width={90}
        
         />
        </div>

    </header>
    </>
  )
}

export default Header




// import logo1 from "../../../src/assets/miracle.png";
// import logo2 from "../../../src/assets/Digital_Summit_24_Logo_Dark.svg";

// const Header = () => {
//   return (
//     <header className="w-full bg-white shadow-sm">
//       <div className="container mx-auto px-4 py-2 sm:py-4">
//         <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//           <div className="w-full sm:w-auto flex justify-center sm:justify-start">
//             <img
//               src={logo1}
//               alt="Miracle logo"
//               className="max-h-12 w-auto object-contain"
//             />
//           </div>
//           <div className="w-full sm:w-auto flex justify-center sm:justify-end">
//             <img
//               src={logo2}
//               alt="Digital Summit 24 logo"
//               className="max-h-10 w-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header;

