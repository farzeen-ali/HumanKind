import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'


export const donationsAtom = atomWithStorage<any>('donationsAtom',[])
