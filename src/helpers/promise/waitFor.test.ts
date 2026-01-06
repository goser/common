import {describe, expect, it, vi} from 'vitest'
import {waitFor} from './waitFor'

describe('waitFor', () => {

    it('should return resolved value', async () => {
        let count = 0
        const resolver = vi.fn(() => {
            if (count > 1) {
                return 'abc'
            }
            count++
        })
        const result = await waitFor(resolver, {pollMs: 10})
        expect(resolver).toBeCalledTimes(3)
        expect(result).toBe('abc')
    })

    it('should allow to return undefined as value', async () => {
        let count = 0
        const resolver = vi.fn(() => {
            if (count > 1) {
                return undefined
            }
            count++
            return null
        })
        const result = await waitFor(resolver, {pollMs: 1, unresolvedValue: null})
        expect(resolver).toBeCalledTimes(3)
        expect(result).toBe(undefined)
    })

    it('should timeout with default message', async () => {
        const resolver = vi.fn()
        await expect(() => waitFor(resolver, {pollMs: 1, timeoutMs: 10})).rejects.toThrow('Condition not met after 10ms. Condition:')
    })

    it('should timeout with given message', async () => {
        const resolver = vi.fn()
        await expect(() => waitFor(resolver, {pollMs: 1, timeoutMs: 10, message: 'Narf'})).rejects.toThrow('Narf')
    })

    it('should wait for async resolver promise', async () => {
        let count = 0
        const resolver = vi.fn(async () => {
            if (count > 3) {
                return 'abce'
            }
            count++
        })
        const result = await waitFor(resolver, {pollMs: 10})
        expect(resolver).toBeCalledTimes(5)
        expect(result).toBe('abce')
    })

})