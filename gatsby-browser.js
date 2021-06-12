import React from 'react';
import { SidebarProvider } from './src/hooks/useSidebar';
import { Global } from '@emotion/react';
import { globalStyles } from './src/styles';

export const wrapRootElement = ({ element }) => (
	<SidebarProvider>
		<Global styles={globalStyles} />
		{element}
	</SidebarProvider>
);
