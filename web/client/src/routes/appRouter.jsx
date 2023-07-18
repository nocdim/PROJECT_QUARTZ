import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authAdminRoutes, authUserRoutes, publicRoutes } from './routes';

const AppRouter = () => {
    let role = 'ADMIN'; //placeholder for now
    return (
        <Routes>
            {role === 'ADMIN' && authAdminRoutes.map(({path, element}) => 
                <Route key={path} exact path={path} element={element}/>
            )}
            {role === 'USER' && authUserRoutes.map(({path, element}) => 
                <Route key={path} exact path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) => 
                <Route key={path} exact path={path} element={element}/>
            )}
        </Routes>
    )    
}

export default AppRouter;