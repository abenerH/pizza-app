import { useState, useCallback } from 'react'

const useHttp = () => {
  const [requestStatus, setRequestStatus] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setRequestStatus('loading')

    const timeout = setTimeout(() => {
      setRequestStatus('delayed')
    }, 3000)

    fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : 'GET',
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
    }).then(response => response.json())
      .then(data => {
        applyData(data)
        setRequestStatus('done')
      })
      .catch(() => {
        setRequestStatus('error')
        setError(error.message)
        throw new Error('Something went wrong!')
      })
      .finally(() => {
        clearTimeout(timeout)
      })
  }, [])

  return {
    requestStatus,
    error,
    sendRequest
  }
}

export default useHttp
