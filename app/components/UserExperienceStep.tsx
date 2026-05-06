'use client';
export default function UserExperienceStep() {
  return (
    <div className="flex flex-col items-center md:items-stretch gap-10 mt-10 px-4 md:px-40 md:gap-8">

      {/* STEP 1 */}
      <div className="flex flex-col md:flex-row md:justify-end items-center w-full gap-4">
        <div className="relative hidden lg:block">
          <div className="relative top-12 left-10 xl:w-88.5 md:w-35  border"></div>
          <div className="relative top-12 left-10 h-26  w-px border"></div>
        </div>

        <div className="relative w-full md:w-113.5 md:h-34.5 flex flex-col md:flex-row items-center">
          <p className="absolute -top-4 left-4 md:left-7 text-[12px]">STEP :1</p>

          <div className="w-full h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>

          <div className="w-full md:w-109.75 px-4 py-3 md:h-34.5  md:px-5 md:pt-1 shadow-xl shadow-gray-300">
            <h1 className="text-[18px] md:text-[24px] text-[#034a27] font-bold">
              We Listen for the &rdquo;Why&rdquo;
            </h1>
            <p className="text-[14px] md:text-[16px]">
              Before we touch a keyboard, we figure out why you’re building this in the first place.
            </p>
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="flex flex-col md:flex-row md:justify-start items-center w-full gap-4">
        <div className="relative w-full md:w-113.5 md:h-34.5 flex flex-col md:flex-row items-center">
          <p className="absolute -top-4 left-4 md:left-2 text-[12px]">STEP :2</p>
          <div className="w-full md:hidden h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>

          <div className="w-full md:h-34.5 md:w-109.75 px-4 py-3 md:px-5 md:pt-1 shadow-xl shadow-gray-300">
            <h1 className="text-[18px] md:text-[24px] text-[#034a27] font-bold">
              Design for Real People
            </h1>
            <p className="text-[14px] md:text-[16px]">
              We map out an experience that makes sense at a glance.
            </p>
          </div>

          <div className="w-full hidden md:block h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>
        </div>

        <div className="relative hidden lg:block">

          <div className="relative -left-4 top-12 xl:w-88.5 md:w-20  border"></div>
          <div className="relative top-12 xl:left-84 md:left-16 h-26 w-px border"></div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="flex flex-col md:flex-row md:justify-end items-center w-full gap-4">
        <div className="relative hidden lg:block">
          <div className="relative top-12 left-10 xl:w-88.5 md:w-35  border"></div>
          <div className="relative top-12 left-10 h-26  w-px border"></div>
        </div>
        <div className="relative w-full md:w-113.5 md:h-34.5 flex flex-col md:flex-row items-center">
          <p className="absolute -top-4 left-4 md:left-7 text-[12px]">STEP :3</p>

          <div className="w-full h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>

          <div className="w-full md:h-34.5 md:w-109.75 px-4 py-3 md:px-5 md:pt-1 shadow-xl shadow-gray-300">
            <h1 className="text-[18px] md:text-[24px] text-[#034a27] font-bold">
              The Muscle to Build It Right
            </h1>
            <p className="text-[14px] md:text-[16px]">
              We hand-pick the right technology to build a robust foundation.
            </p>
          </div>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="flex flex-col md:flex-row md:justify-start items-center w-full gap-4">
        <div className="relative w-full md:w-113.5 md:h-34.5 flex flex-col md:flex-row items-center">
          <p className="absolute -top-4 left-4 md:left-2 text-[12px]">STEP :4</p>
          <div className="w-full h-2 md:hidden md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>

          <div className="w-full md:h-34.5 md:w-109.75 px-4 py-3 md:px-5 md:pt-1 shadow-xl shadow-gray-300">
            <h1 className="text-[18px] md:text-[24px] text-[#034a27] font-bold">
              Zero-Friction Launch
            </h1>
            <p className="text-[14px] md:text-[16px]">
              We collaborate with you for a smooth rollout.
            </p>
          </div>

          <div className="w-full hidden md:block h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative -left-4 top-12 xl:w-88.5 md:w-20  border"></div>
          <div className="relative top-12 xl:left-84 md:left-16 h-26 w-px border"></div>
        </div>
      </div>

      {/* STEP 5 */}
      <div className="flex flex-col md:flex-row md:justify-end items-center w-full gap-4">
        <div className="relative w-full md:w-113.5 md:h-34.5 flex flex-col md:flex-row items-center">
          <p className="absolute -top-4 left-4 md:left-7 text-[12px]">STEP :5</p>

          <div className="w-full h-2 md:w-6.25 md:h-34.5 bg-[#EEF430]"></div>

          <div className="w-full md:h-34.5 md:w-109.75 px-4 py-3 md:px-5 md:pt-1 shadow-xl shadow-gray-300">
            <h1 className="text-[18px] md:text-[24px] text-[#034a27] font-bold">
              Refining the Reality
            </h1>
            <p className="text-[14px] md:text-[16px]">
              Post-launch, we improve using real-world data.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}