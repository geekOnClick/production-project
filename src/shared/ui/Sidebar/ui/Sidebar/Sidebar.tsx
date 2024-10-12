import { classNames } from 'shared/lib/classnames'
import css from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
    className?: string
};

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={classNames(css.Sidebar, {[css.collapsed]:collapsed}, [className])}>
            <button onClick={() => setCollapsed(prev => !prev)}>Toggle</button>
            <div className={css.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={css.lang} />
            </div>
        </div>
    )
};