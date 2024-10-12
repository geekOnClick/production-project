import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const AboutPage = () => {

  const {t} = useTranslation('about');

  return (
    <div>
        <div>{t('О сайте')}</div>
    </div>
  )
}

export default AboutPage