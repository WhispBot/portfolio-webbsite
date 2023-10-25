import { useState } from "react";

const usePrevious = (state: number) => {
    const [tuple, setTuple] = useState<(number | null)[]>([null, state]);

    if (tuple[1] !== state) {
        setTuple([tuple[1] ?? 0, state]);
    }

    return tuple[0] ?? 0;
};
export default usePrevious;
