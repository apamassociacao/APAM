import { FC } from 'react';

import Header from '../Header/Header.tsx';
import { Outlet } from "react-router-dom";

const BaseLayout: FC = () => (
    <>
        <Header />
        <Outlet />
    </>
);

export default BaseLayout;