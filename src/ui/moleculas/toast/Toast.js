import React from 'react';
import {Toast as PrimeToast} from 'primereact/toast';

import 'primereact/resources/themes/lara-light-blue/theme.css';

const Toast = React.forwardRef((_, ref) => {
    return (<PrimeToast ref={ref} position={'bottom-right'}/>)
})

export default Toast;