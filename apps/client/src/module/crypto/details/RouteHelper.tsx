'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { IntervalQueryTable, TabsInterval } from "./IntervalQueryTable";

export function RouteHelper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    useEffect(() => {
        // if no tab is selected, push to the default tab url
        if (!searchParams.get('tab')) {
            const tab = TabsInterval.ONEDAY;
            router.push(`?tab=${tab}&interval=${IntervalQueryTable[tab].interval}&startTime=${IntervalQueryTable[tab].getStartTime()}&endTime=${IntervalQueryTable[tab].getEndTime()}`);
        }
    }, [router, searchParams]);

    return (
        <main className='flex flex-col justify-start items-center min-h-screen'>
            {children}
        </main>
    );
}