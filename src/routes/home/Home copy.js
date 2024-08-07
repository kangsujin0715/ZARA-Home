// import React, { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const sections = [
//   { id : 'intro', title : '성심당'},
//   { id : 'new', title : '대표제품'},
//   { id : 'order', title : '주문'},
//   { id : 'location', title : '문의사항'},
// ]

// const Home = () => {
//   const [ activeSection, setActiveSection ] = useState(0)
//   const [ showTooltip, setShowTooltip ] = useState(null)
//   const sectionRefs = useRef(sections.map(()=>React.createRef()))
//   // ref  4개 생성 
//   const [ isScrolling, setIsScrolling ] = useState(false)

//   useEffect(()=>{
//       const observerOptions = { 
//         root : null, 
//         rootMargin : '0px',
//         threshold: 0.5
//       }

//       // section 번호 찾기 
//       const handleIntersect = ( entries ) => {
//           entries.forEach( (entry)=>{
//             if(entry.isIntersecting ){
//               const index = sectionRefs.current.findIndex(ref => ref.current === entry.target )
//               if( index !== -1 ){
//                 setActiveSection(index)
//               }
//             }
            
//           }) // FOREACH END 
//       }

//         const observer = new IntersectionObserver(handleIntersect, observerOptions);

//         sectionRefs.current.forEach(ref=>{
//           if( ref.current){
//             observer.observe(ref.current)
//           }
//         })

//         const HandleWheel = e=>{
//           e.preventDefault();
//           if( isScrolling ) return; 

//           setIsScrolling(true);

//           const deltaY = e.deltaY;
//           let nextSection;

//           if( deltaY > 0 && activeSection < sections.length - 1){
//             // scroll down 
//             nextSection = activeSection + 1; 
//           }else if( deltaY < 0 && activeSection > 0){
//             // scroll up
//             nextSection = activeSection - 1; 
//           }else{
//             setIsScrolling(false)
//             return;
//           }
//           scrollToSection(nextSection);
//         } /// HANDLE WHEEL END 

//         setTimeout( ()=>{
//           setIsScrolling(false)
//         }, 1000)

//         window.addEventListener('wheel', HandleWheel, { passive : false })

//         return ()=>{
//           sectionRefs.current.forEach(ref=>{
//             if(ref.current){
//               observer.unobserve(ref.current)
//             }
//           })
//            window.removeEventListener('wheel', HandleWheel)
//         }

//   }, [activeSection, isScrolling])


//   const scrollToSection = (index)=>{
//     sectionRefs.current[index].current.scrollIntoView({
//        behavior : 'smooth'
//     })
//   }
//   return (
//       <div className='relative'>
//         <div>sdjjasdlkjsalkj</div>
//         {/* indecator */}
//         <div className='fixed right-4 top-1/2 transform translate-y-1/2 z-50'> 
//             {
//               sections.map(( section, index )=>(
//                 <div   key={section.id}
//                        className='relative'
//                 >
//                     <motion.div className='w-3 h-3 rounded-full cursor-pointer overflow-hidden'>
//                       <AnimatePresence>
//                         {section.title}
//                         <div className='bg-red-200 w-3 h-3'
//                             onClick={()=>scrollToSection(index)}
//                         ></div>
//                       </AnimatePresence>
//                     </motion.div>
//                 </div>
//               ))
//             }  
//         </div>

//         {/* sections */}
//         {
//           sections.map((section, index)=>(
//             <motion.section key={section.id}
//                             ref={ sectionRefs.current[index] }
//                             className='h-screen w-full'
//             >
//              section, {  index }
//             </motion.section>
//           ))
//         }
//       </div>
//   )
// }

// export default Home