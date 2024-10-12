import { classNames } from "."

describe('classnames', () => {
    test('classnames', () => {
        expect(classNames('some')).toBe('some');
    })
    test('classnames with additional class', () => {
        expect(classNames('some', {}, ['additional'])).toBe('some additional');
    })
    test('classnames with additional class and mods', () => {
        expect(classNames('some', {hovered: true}, ['additional'])).toBe('some additional hovered');
    })
})