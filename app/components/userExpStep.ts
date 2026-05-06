// type Design = {
//     id: number;
//     title: string;
//     desc: string;
// };

// export const step: Design[] = [
//     {
//         id: 1,
//         title: `We Listen for the "Why"`,
//         desc: `Before we touch a keyboard, we figure out why you’re building this in the first place. We dig for the friction in your current process so we can create a solution that actually clears the path.
// `,
//     },
//     {
//         id: 2,
//         title: `Design for Real People`,
//         desc: `We map out an experience that makes sense at a glance. We want your team and your customers to actually want to use the tool, rather than feeling like they're fighting against it.`,
//     },
//     {
//         id: 3,
//         title: `The Muscle to Build It Right`,
//         desc: `We hand-pick the right technology to build a robust, custom foundation. No templates, no shortcuts, and no "black box" code that you’re stuck with and can’t manage later.
// `,
//     },
//     {
//         id: 4,
//         title: `Zero-Friction Launch`,
//         desc: `We collaborate with you on the heavy lifting of the rollout. Our goal is that on day one, the new tech feels like it has always been a natural part of your workflow.
// `,
//     },
//     {
//         id: 5,
//         title: `Refining the Reality `,
//         desc: `Post-launch, we stay in the trenches with you. We use real-world data to see how people are actually clicking and scrolling. If it’s not making life easier for your users, we fix it.`,
//     },

// ];

// type Content = {
//     id: number;
//     title: string;
//     desc: string;
// };

// type Design = {
//     idx: number;
//     items: Content[];
// };

// export const step: Design[] = [
//     {
//         idx: 1,
//         items: [
//             {
//                 id: 1,
//                 title: `We Listen for the "Why"`,
//                 desc: `Before we touch a keyboard, we figure out why you’re building this in the first place. We dig for the friction in your current process so we can create a solution that actually clears the path.`,
//             },
//             {
//                 id: 2,
//                 title: `Design for Real People`,
//                 desc: `We map out an experience that makes sense at a glance. We want your team and your customers to actually want to use the tool, rather than feeling like they're fighting against it.`,
//             },
//         ],
//     },
//     {
//         idx: 2,
//         items: [
//             {
//                 id: 3,
//                 title: `The Muscle to Build It Right`,
//                 desc: `We hand-pick the right technology to build a robust, custom foundation. No templates, no shortcuts, and no "black box" code that you’re stuck with and can’t manage later.`,
//             },
//             {
//                 id: 4,
//                 title: `Zero-Friction Launch`,
//                 desc: `We collaborate with you on the heavy lifting of the rollout. Our goal is that on day one, the new tech feels like it has always been a natural part of your workflow.`,
//             },
//         ],
//     },

//     {
//         idx: 3,
//         items: [
//             {
//                 id: 5,
//                 title: `Refining the Reality `,
//                 desc: `Post-launch, we stay in the trenches with you. We use real-world data to see how people are actually clicking and scrolling. If it’s not making life easier for your users, we fix it.`,
//             },

//         ],
//     },
// ];



// {step.map((group, groupIndex) => {
//   if (!group.items || group.items.length === 0) return null;

//   return (
//     <div key={group.idx}>
//       {group.items.map((item, index) => {

//         const isLastGroup = groupIndex === step.length - 1;
//         const isLastItem = index === group.items.length - 1;

//         return (
//           <div key={item.id}>

//             {/* LEFT SIDE */}
//             {index % 2 !== 0 && (
//               <div className="flex justify-start items-center">
//                 <div className="w-113.5 h-34.5">
//                   <div className="relative w-113.5 h-34.5 flex justify-between items-center">
//                     <p className="absolute -top-4 left-2 text-[12px] font-normal">
//                       STEP : {item.id}
//                     </p>

//                     <div className="w-109.75 px-5 pt-1 min-h-34.5 shadow-xl shadow-gray-300">
//                       <h1 className="text-[24px] text-[#034a27] font-bold">
//                         {item.title}
//                       </h1>
//                       <p className="text-[16px] font-normal">
//                         {item.desc}
//                       </p>
//                     </div>

//                     <div className="w-6.25 h-34.5 bg-[#EEF430]"></div>
//                   </div>
//                 </div>

//                 {/* ✅ FINAL FIX */}
//                 {!(isLastGroup && isLastItem) && (
//                   <div className="relative">
//                     <div className="relative top-12 w-88.5 border"></div>
//                     <div className="relative top-12 left-88 h-26 w-px border"></div>
//                   </div>
//                 )}
//               </div>
//             )}

//           </div>
//         );
//       })}
//     </div>
//   );
// })}