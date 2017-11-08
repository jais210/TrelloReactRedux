import React from 'react';
import {connect} from 'redux-zero/react';
import {} from './actions';
import { Form, FormGroup, FormControl, Checkbox, Col, ControlLabel, Button, controlId } from 'react-bootstrap';

const Boards = ()=> (
    <div>
   

</div>      
)
    
const mapToProps = ({boards}) => ({boards})
export default connect(mapToProps)(Boards);