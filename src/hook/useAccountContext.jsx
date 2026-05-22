import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext/AccountContext'

function useAccountContext() {
    return useContext(AccountContext)
}
export default useAccountContext