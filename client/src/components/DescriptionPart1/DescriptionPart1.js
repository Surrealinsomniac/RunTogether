import React from 'react';
import './DescriptionPart1.css';
import { Column, Row } from 'simple-flexbox';

const DescriptionPart1 =() => {
    return (
        <div>
<Column>
  <Row>
    <h3 className="centerMainText">We Are Running It</h3>
</Row>
  </Column>      

<Column className="textField" flexGrow={1}>
<Row vertical='center'>
  <Column className="bob"flexGrow={3} horizontal='center'>
    <img className="imageDescription" src="/assets/photo4.jpg"/> 
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



export default DescriptionPart1;