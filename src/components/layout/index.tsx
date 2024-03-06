import { ReactElement } from "react";
import BlankLayout from "./blank_layout";

export const getLayout = (page: ReactElement) => {
    return (
        <>
            <BlankLayout>{page}</BlankLayout>
        </>
    );
};
