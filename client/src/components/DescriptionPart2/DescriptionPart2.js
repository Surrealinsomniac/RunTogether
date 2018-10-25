import React from 'react';
import './DescriptionPart2.css';
import { Column, Row } from 'simple-flexbox';

const DescriptionPart2 =() => {
    return (
        <div>     

<Column className="textField" flexGrow={1}>
<Row vertical='center'>

  <Column className="textHolder" flexGrow={3} horizontal='center'>
    <p className="Text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, pa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    </p>
  </Column>
  <Column className="bob"flexGrow={1} horizontal='center'>
    <img className="imageDescription2" src="/assets/photo5.jpg"/> 
  </Column>
</Row>
</Column>
        </div>
  
    );
};



export default DescriptionPart2;