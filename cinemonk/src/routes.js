import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SelectDate from '../src/pages/selectDate/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/date" component={SelectDate} />
            </Switch>
        </BrowserRouter>
    )
}