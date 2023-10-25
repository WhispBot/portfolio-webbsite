"use client";

import * as TooltipPrim from "../_components/ui/tooltip";

interface TooltipProps extends React.PropsWithChildren {
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
    return (
        <TooltipPrim.TooltipProvider>
            <TooltipPrim.Tooltip>
                <TooltipPrim.TooltipTrigger asChild>
                    {children}
                </TooltipPrim.TooltipTrigger>
                <TooltipPrim.TooltipContent>{text}</TooltipPrim.TooltipContent>
            </TooltipPrim.Tooltip>
        </TooltipPrim.TooltipProvider>
    );
};
export default Tooltip;
