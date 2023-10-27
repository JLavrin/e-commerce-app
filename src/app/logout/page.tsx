'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const LogoutPage = () => {
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }

// Clear local storage
  function clearLocalStorage() {
    localStorage.clear();
  }

// Clear session storage
  function clearSessionStorage() {
    sessionStorage.clear();
  }

  useEffect(() => {
      deleteAllCookies()
      clearLocalStorage()
      clearSessionStorage()
      window.location.replace('/')
  }, [])


  return null
}

export default LogoutPage
