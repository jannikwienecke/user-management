import { render } from '@testing-library/react';

import Notes from './notes';

describe('Notes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Notes />);
    expect(baseElement).toBeTruthy();
  });
});
