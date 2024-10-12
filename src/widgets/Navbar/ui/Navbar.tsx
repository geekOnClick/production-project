import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classnames'
import css from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'

interface NavbarProps {
    className?: string
};

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames (css.navbar, {}, [className])}>
            <div className={css.links}>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={css.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
