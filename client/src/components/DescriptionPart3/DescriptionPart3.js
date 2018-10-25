import React from 'react';
import './DescriptionPart3.css';
import { Column, Row } from 'simple-flexbox';

const DescriptionPart3 =() => {
    return (
        <div>   

<Column className="textField" flexGrow={1}>
<Row vertical='center'>
  <Column className="bob"flexGrow={3} horizontal='center'>
    <img className="imageDescription" src="/assets/photo6.jpg"/> 
  </Column>
  <Column flexGrow={1} horizontal='center'>
    <p className="Text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, pa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    </p>
  </Column>
</Row>
</Column>
        </div>
  
    );
};



export default DescriptionPart3;