import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Pagamento from './pages/pagamento';
import SelectDate from '../src/pages/selectDate/index';
import SelectHourLanguage from './pages/selectHourLanguage';
import SelectSeat from './pages/selectSeat';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/date" component={SelectDate} />
                <Route path="/hour-language" component={SelectHourLanguage} />
                <Route path="/seat" component={SelectSeat} />

                <Route path='/pagamento' component={Pagamento} />
            </Switch>
        </BrowserRouter>
    )
}