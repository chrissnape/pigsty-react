import { FC, MouseEventHandler } from 'react';
import { Button, Input } from '../';
import { InputWrapper, Label, SearchBox } from './style';

type Props = {
  onChange: Function,
  onClick: MouseEventHandler,
  searchValue: string,
}

const SearchBoxComponent: FC<Props> = ({onChange, onClick, searchValue}): JSX.Element => (
  <SearchBox>
    <Label>
      Search location
    </Label>
    <InputWrapper>
      <Input onChange={onChange} placeholder="London" value={searchValue}/>
    </InputWrapper>
    <Button label="Search" primary onClick={onClick}/>
  </SearchBox>
);

export default SearchBoxComponent;
