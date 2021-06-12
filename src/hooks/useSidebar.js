import React, { createContext, useCallback, useContext, useState } from 'react';

const SidebarContext = createContext([false, () => {}]);

export function SidebarProvider({ children }) {
	const [open, setOpen] = useState(false);

	const toggleOpen = useCallback(() => setOpen(open => !open), [setOpen]);

	return <SidebarContext.Provider value={[open, toggleOpen]}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
	return useContext(SidebarContext);
}
