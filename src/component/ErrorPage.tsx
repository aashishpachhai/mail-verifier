export const ErrorPage = ({ error }: any) => {
  return (
    <div className="flex flex-col items-center lg:h-screen lg:w-screen lg:pt-20 lg:px-[18.344rem]  lg:pb-[14.688rem] p-8 pt-16 md:h-screen md:w-screen md:pt-20 md:px-[9.344rem]  md:pb-[7.688rem] ">
      <div className=" lg:w-[53.313rem] lg:h-[31.563rem] space-y-4 text-center md:w-[27.313rem] md:h-[15.563rem] ">
        <div className=" bg-[#D33939] h-48 w-48 lg:h-[15rem] lg:w-[15rem]  rounded-full m-auto flex items-center justify-center overflow-hidden">
          <img src="/Error.svg" />
        </div>
        <div className=" text-[#D33939] text-[1.6rem] md:text-[2rem] font-outfit lg:text-[4rem]">
          {error}
        </div>
        <div className="font-rhd lg:text-[2rem] text-center gap-1 lg:leading-[2.5rem] text-[1.2rem] md:text-[1.2rem]">
          Oops! It seems like the page you are trying to access is either
          invalid or has expired. We apologize for any inconvenience this may
          have caused.
        </div>
      </div>
    </div>
  );
};
