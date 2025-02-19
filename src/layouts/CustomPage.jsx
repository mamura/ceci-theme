import { Fragment } from "react"
import { Outlet } from "react-router-dom";

const CustomPage = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default CustomPage;