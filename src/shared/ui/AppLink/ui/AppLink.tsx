import { classNames } from 'shared/lib/classnames'
import css from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
};

export const AppLink: FC<AppLinkProps> = ({className, children, theme = AppLinkTheme.Primary, to, ...otherProps}) => {
return (
<Link {...otherProps} to={to} className={classNames(css.AppLink, {}, [className, css[theme]])}>
    {children}
</Link>
)};