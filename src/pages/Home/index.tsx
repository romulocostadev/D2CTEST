import React, { useState, useEffect } from 'react';

import {
  TesteVeiling,
  Frame13,
  Frame11,
  FormItem,
  InputBasic,
  SelectField,
  SelectOption,
} from './styles';

const Frame9 = () => {
  const listSelect = [
    { id: 1, desc: 'desc1' },
    { id: 2, desc: 'desc2' },
  ];

  return (
    <TesteVeiling>
      <Frame13>
        <Frame11>
          <FormItem
            label="Input Label"
            name="teste"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <InputBasic />
          </FormItem>
          <FormItem
            label="Paises"
            name="foo"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <SelectField>
              {listSelect.map(l => (
                <SelectOption key={l.id} value={l.id}>
                  {l.desc}
                </SelectOption>
              ))}
            </SelectField>
          </FormItem>
        </Frame11>
      </Frame13>
    </TesteVeiling>
  );
};

export default Frame9;
