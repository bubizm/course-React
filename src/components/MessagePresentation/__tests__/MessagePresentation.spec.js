import React from 'react';
import { render, screen } from '@testing-library/react';

import { MessagePresentation } from '..';

describe('MessagePresentation test', () => {
  it('render author and text', () => {
    render(<MessagePresentation author='author' message='text' />);

    const text = screen.getByText('author: text');
    expect(text).toBeDefined();
  });
});
