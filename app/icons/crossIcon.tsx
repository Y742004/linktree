import { s } from 'framer-motion/client';
import React from 'react';
import type { SVGProps } from 'react';

export function CrossIcon({size, props}: {
    size?: number;
    props?: SVGProps<SVGSVGElement>;
}) {
	return ( <svg xmlns="http://www.w3.org/2000/svg" width={size||"16"} height= {size||"16"} viewBox="0 0 16 16"><path fill="currentColor" d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"/></svg>);
}
 