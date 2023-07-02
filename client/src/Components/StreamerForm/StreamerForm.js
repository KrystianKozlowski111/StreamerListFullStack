import React, { useState } from 'react';
import axios from 'axios';
import {
  Wrapper,
  Input,
  TextArea,
  Button,
  Label,
  LabelTextarea,
  ButtonWrapper,
} from './StreamerForm.style';
import Select from 'react-select';
import { Colors } from '../../Variables.js';

function StreamerForm() {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('http://localhost:3001/streamers', { name, platform, description })
      .then(() => {
        setName('');
        setPlatform('');
        setDescription('');
      });
  }
  const selectOptions = [
    { value: 'Twitch', label: 'Twitch' },
    { value: 'YouTube', label: 'YouTube' },
    { value: 'TikTok', label: 'TikTok' },
    { value: 'Kick', label: 'Kick' },
    { value: 'Rumble', label: 'Rumble' },
  ];
  const selectStyles = {
    container: (p) => ({
      ...p,

      width: '100%',
    }),
    control: (p) => ({
      ...p,
      boxShadow: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      minHeight: 'none',
      borderRadius: '0',
      minWidth: '150px',
      width: '100%',
      color: `${Colors.white}`,
      borderBottom: ` 1px solid ${Colors.blue}`,
      transition: ` all 0.2s linear`,
      '&:hover': {
        borderColor: `${Colors.light}`,
      },
    }),
    dropdownIndicator: (p) => ({
      ...p,
      padding: 0,
      color: `${Colors.blue}`,
    }),
    indicatorSeparator: (p) => ({
      display: 'none',
    }),
    menu: (p) => ({
      ...p,
      top: 'calc(100% + 4px)',
      left: '50%',
      transform: 'translateX(-50%)',
      margin: 0,
      borderRadius: '0px',
      width: '100%',
      boxShadow: 'none',
      padding: ' 0',
      zIndex: 2134,
    }),
    menuList: (p) => ({
      ...p,
      overflow: 'visible',
      padding: '0',
    }),
    option: (p, { isSelected }) => ({
      ...p,
      color: `${Colors.white}`,
      cursor: 'pointer',
      padding: '12px 29px',
      fontSize: '14px',

      lineHeight: '22px',
      position: 'relative',
      backgroundColor: isSelected ? `${Colors.dark}` : `${Colors.navy}`,
      '&:hover': {
        backgroundColor: `${Colors.dark}`,
      },
    }),

    valueContainer: (p) => ({
      ...p,
      padding: 0,
      color: `${Colors.white}`,
      marginRight: '10px',
    }),
    placeholder: (p) => ({
      ...p,
      color: `${Colors.white}`,
      textAlign: 'left',
    }),
    singleValue: (p) => ({
      ...p,
      color: `${Colors.white}`,
      textAlign: 'left',
    }),
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Label>
      <Label>
        Platform:
        <Select
          placeholder={'Select a platform'}
          styles={selectStyles}
          options={selectOptions}
          defaultValue={platform}
          onChange={(e) => setPlatform(e.value)}
          required
        />
      </Label>
      <LabelTextarea>
        Description:
        <TextArea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
      </LabelTextarea>
      <ButtonWrapper>
        <Button type="submit">Submit</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default StreamerForm;
