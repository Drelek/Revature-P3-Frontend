import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/batches/Header';
import AddEditCurriculum from '.';

let wrapper: any;

describe('AddEditCurriculum', () => {
  beforeEach(() => {
    wrapper = mount(
      <AddEditCurriculum
        route={{
          params: {
            curriculumName: 'Curriculum',
            createdOn: 1622505600000,
            modifiedOn: 1627776000000,
            createdBy: 'Robert Connell',
            modifiedBy: 'Robert Connell',
            skills: [0, 1, 2],
            batches: [2, 3, 4],
          },
        }}
      />
    );
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
  });

  //tests
});

// yeet
