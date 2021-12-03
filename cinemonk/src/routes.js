import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SelectDate from '../src/pages/selectDate/index';
import SelectHourLanguage from './pages/selectHourLanguage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/date" component={SelectDate} />
                <Route path="/hour-language" component={SelectHourLanguage} />
            </Switch>
        </BrowserRouter>
    )
}