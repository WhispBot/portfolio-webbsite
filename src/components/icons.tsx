import { cn } from "~/lib/utils";

// export const LogoIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
//     return (
//         <svg
//             className={cn(className)}
//             width="32"
//             height="40"
//             viewBox="0 0 175 209"
//             version="1.1"
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="currentColor"
//             strokeWidth="15"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             fill="none"
//         >
//             <path d="M15.278,26.389l-11.111,-22.222l166.666,-0l-22.222,44.444c-30.131,-14.313 -44.034,-22.633 -88.889,-22.222l0,55.555l88.889,0l-22.222,44.445c-19.82,-15.331 -27.059,-22.178 -66.667,-22.222l0,77.777c36.934,0.403 51.767,-6.304 88.889,-22.222l22.222,44.445l-166.666,-0l11.111,-22.223l-0,-155.555Z" />
//         </svg>
//     );
// };
const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <svg
            className={cn(className)}
            width="24"
            height="24"
            viewBox="0 0 52 52"
            version="1.1"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <path
                    d="M49.803,6.803c-0,-1.326 -0.527,-2.598 -1.465,-3.536c-0.937,-0.937 -2.209,-1.464 -3.535,-1.464l-38,-0c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536l-0,38c-0,1.326 0.527,2.598 1.464,3.535c0.938,0.938 2.21,1.465 3.536,1.465l38,-0c1.326,-0 2.598,-0.527 3.535,-1.465c0.938,-0.937 1.465,-2.209 1.465,-3.535l-0,-38Z"
                /> */}
            <path d="M12.448,11.421l-2.054,-4.109l30.818,-0l-4.109,8.218c-5.572,-2.646 -8.143,-4.185 -16.437,-4.109l0,10.273l16.437,-0l-4.109,8.218c-3.665,-2.835 -5.004,-4.101 -12.328,-4.109l0,14.382c6.83,0.074 9.573,-1.166 16.437,-4.11l4.109,8.219l-30.818,-0l2.054,-4.109l0,-28.764Z" />
        </svg>
    );
};
export default Logo;
