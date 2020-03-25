import React from 'react'

import * as S from './styled'

const Languages = () => {
    return (
        <S.LanguageWrapper>
            <S.LanguageItem>
                <S.LanguageLink to="/" hrefLang="uk">
                    uk-UA
                </S.LanguageLink>
            </S.LanguageItem>
            <S.LanguageItem>
                <S.LanguageLink to="/en" hrefLang="en">
                    en-US
                </S.LanguageLink>
            </S.LanguageItem>
            <S.LanguageItem>
                <S.LanguageLink to="/ru" hrefLang="ru">
                    ru-UA
                </S.LanguageLink>
            </S.LanguageItem>
        </S.LanguageWrapper>
    )
}

export default Languages
