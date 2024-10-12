import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const MainPage = () => {

    const {t} = useTranslation('main');

    return (
        <div>
            <div>{t('Главная страница')}</div>
        </div>
    )
}

export default MainPage;