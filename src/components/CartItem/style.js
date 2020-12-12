import styled from 'styled-components';
import * as Txt from '../Txt';

export const Container = styled.div`
  width: 100%;
  margin: 6px 0;
  display: flex;
  min-height: 200px ;
`;

export const Left = styled.div`
`;
export const Right = styled.div`
  max-width: 560px;
`;

const CheckBoxContainer = styled.div`
  margin: 75px 14px 0 2px ;
  float:left;
  width: 24px;
`;

const CheckInput = styled.input`
  height: 16px;
  width: 16px;
  opacity: .02;
  position: absolute;
  z-index:1;
`;

const CustomCheckBox = styled.i`
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image:url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-experiment_2020_1x-98977b23b0fc9845c66d40bf614bec9905194c21._V2_.png');
  background-position: -453px -3px;
  border-radius: 2px;
  ${CheckInput}:checked + &{
    background-position: -475px -40px;
  }

`;


export const CheckBox = ({ value, onChange }) => {
  return (
    <CheckBoxContainer>
      <CheckInput type='checkbox' checked={value} onChange={() => onChange(!value)} />
      <CustomCheckBox></CustomCheckBox>
    </CheckBoxContainer>
  );
}

const ImgContainer = styled(Txt.CustomLink)`
  margin: 0 auto;
  margin-right: 10px;
`;

const ImgContent = styled.div`
  width: 170px;
  float:left;
`;

const Img = styled.img`
  display:block;
  max-width: 160px;
  max-height: 220px;
  margin:0 auto;
`;

export const ItemImg = ({ imgSrc }) => {
  return (
    <ImgContainer >
      <ImgContent>
        <Img src={imgSrc} alt='' />
      </ImgContent>
    </ImgContainer>
  );
}

// const IsGiftInput = styled.input``;
const IsGiftLabel = styled.label`
  display:flex;
  align-items:center;
`;


const IsGiftCheckBox = ({ value, handleChange }) => {
  return (
    <IsGiftLabel>
      <input type='checkbox' value={value} onChange={() => handleChange(!value)} />
      <Txt.Span margin='0 0 0 5px'>
        This is a gift
      </Txt.Span>
    </IsGiftLabel>
  );
}

const IsGiftContainer = styled.div`
  display:flex;
  margin-left: 3px;
`;

export const IsGift = ({ value, handleChange }) => {
  return (
    <IsGiftContainer>
      <IsGiftCheckBox value={value} handleChange={handleChange} />
      <Txt.CustomLink color='#007185' margin='0 0 0 4px'> Learn More</Txt.CustomLink>
    </IsGiftContainer>
  );
}

export const ControlRow = styled.div`
  margin-top: -9px;
  display:flex;
  align-items:center;
`;

export const DropDownContainer = styled.div`
  position:relative;
  background-color:#F0F2F2;
  padding: 0 10px;
  border-radius: 7px;
  border: 1px solid #D5D9D9;
  box-shadow: 0 2px 5px rgba(15,17,17,.15);
  height: 29px;
  width: 80px;
  display:flex;
  align-items: center; 
  `;

export const Select = styled.select`
  all:unset;
  width: 75px;
  position:absolute;
  opacity: 0;
  margin-left: -8px;
`;


export const DropDownArrow = styled.i`
    background:url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e9434610f810a3a99b3f0e49c1b938c9d76628b8._V2_.png');
    position: absolute;
    top: 5px;
    left: 110%;
    display:block;
    width: 10px;
    height: 8px;
    background-position: -7px -102px;
  `;


export const QuantitySelect = ({ value, onChange }) => {
  return (
    <DropDownContainer>
      <Txt.Span size='14px'>
        Qty:
      <Txt.Span size='14px' margin='0 0 0 10px'>
          {value}
        </Txt.Span>
        <DropDownArrow />
      </Txt.Span>
      <Select value={value} onChange={(e) => onChange(e.target.value)} size={0} id="items">
        <option value="0">0 (Delete)</option>
        <option value="1" defaultValue>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="">10+</option>
      </Select>
    </DropDownContainer>
  );
}

export const ControlRowDivider = styled.i`
  display: inline-block;
  margin: 0 1em;
  width: 1px;
  height: 15px;
  background-color: #ddd;
`;

export const PriceTxt = styled.span`
  position:absolute;
  right: 0;
  font-size: 18px;
  font-weight: 700;
`;