// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#2a2d34] border-[#5c946e] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-[#A0DDE6] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/" className="text-[#30C5FF]">David Riegler</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/DavidRiegler?tab=repositories"
              className="flex items-center gap-2 uppercase text-[#30C5FF]"
            >
              <span>Github</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;