import * as React from 'react';

const renderEmpty = (componentName?: string): React.ReactNode => <div />;

export type RenderEmptyHandler = typeof renderEmpty;

export default renderEmpty;
